import {Button, Typography} from "@material-tailwind/react";
import {useEffect, useState} from "react";
import {authStore} from "../store/authStore.js";
import axios from "axios";
import {addSeconds, parseISO} from "date-fns";
import {useNavigate} from "react-router-dom";

const TABLE_HEAD = ["Pro", "Date/Heure", "message", "Status", "Actions "];

export const ListRdvUser = () => {
    const navigate = useNavigate();
    const {auth} = authStore();
    const [tablesRows, setTablesRows] = useState([]);
    useEffect(() => {
        if (!auth.user) return;
        axios.get('http://localhost:8000/mes-rendez-vous', {headers: {Authorization: 'Bearer ' + auth.token}}).then((response) => {
            setTablesRows([...response.data.data.filter((rdv) => rdv.personne == auth.user.id)])
        }).catch((error) => {
            if (error.response.status === 403) {
                navigate('/logout');
            }
        });
    }, []);

    const formatDateFromApi = (data) => {
        const dateDebutISO = `${data.date}T00:00:00`;
        const dateDebut = parseISO(dateDebutISO);

        const heureDebutEnSecondes = data.heure_debut;
        const heureFinEnSecondes = data.heure_fin;

        const dateHeureDebut = addSeconds(dateDebut, heureDebutEnSecondes);
        const dateHeureFin = addSeconds(dateDebut, heureFinEnSecondes);

        return 'Le ' + dateHeureDebut.toLocaleDateString() + ' de ' + dateHeureDebut.toLocaleTimeString() + ' à ' + dateHeureFin.toLocaleTimeString();
    }


    return (
        <div className="w-full h-96 overflow-y-scroll">
            <Typography variant={"h4"} className={'text-bleuFonce my-2'}>Listes des rendez-vous que vous avez
                pris.</Typography>
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                <tr>
                    {TABLE_HEAD.map((head) => (
                        <th
                            key={head}
                            className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                        >
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal leading-none opacity-70"
                            >
                                {head}
                            </Typography>
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {tablesRows.map((pro, index) => {
                    const isLast = index === tablesRows.length - 1;
                    const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                    return (
                        <tr key={index}>
                            <td className={classes}>
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {pro?.nom}
                                </Typography>
                            </td>
                            <td className={classes}>
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {formatDateFromApi(pro)}
                                </Typography>
                            </td>
                            <td className={classes}>
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal break-words max-w-40"
                                >
                                    {pro?.message.length > 100 ? pro?.message.substring(0, 100) + '...' : pro?.message}
                                </Typography>
                            </td>
                            <td className={classes}>
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {pro?.etat}
                                </Typography>
                            </td>
                            <td className={classes}>
                                <Button
                                    variant="filled"
                                    size={"sm"}
                                    className="font-medium bg-red-500"
                                >
                                    Annuler
                                </Button>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    )
}
