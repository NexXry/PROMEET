import {Button, Chip} from "@material-tailwind/react";
import axios from 'axios';
import { useState, useEffect } from 'react';


export const RdvListe = ({ nom, prenom, heure, jour, mois, annee }) => {

    // const [rdvEnCours, setRdvEnCours] = useState([]);

    // useEffect(() => {
    //     fetchRdvEnCours();
    // }, []);

    // const fetchRdvEnCours = async () => {
    //     try {
    //         const response = await axios.get('/api/rdv-en-cours'); // a modifier par endpoint reel
    //         setRdvEnCours(response.data);
    //     } catch (error) {
    //         console.error('Erreur lors de la récupération des rendez-vous en cours :', error);
    //     }
    // };
    const [rdvEnCours, setRdvEnCours] = useState([]);
    useEffect(() => {
        const data = [
            { nom: "Doe", prenom: "John", heure: "10:00", jour: "10", mois: "Avril", annee: "2024" },
            { nom: "Smith", prenom: "Alice", heure: "11:30", jour: "12", mois: "Avril", annee: "2024" },
            { nom: "Smith", prenom: "Alice", heure: "11:30", jour: "12", mois: "Avril", annee: "2024" },
            { nom: "Smith", prenom: "Alice", heure: "11:30", jour: "12", mois: "Avril", annee: "2024" },
            { nom: "Smith", prenom: "Alice", heure: "11:30", jour: "12", mois: "Avril", annee: "2024" },
            { nom: "Smith", prenom: "Alice", heure: "11:30", jour: "12", mois: "Avril", annee: "2024" },
            { nom: "Smith", prenom: "Alice", heure: "11:30", jour: "12", mois: "Avril", annee: "2024" },
            { nom: "Smith", prenom: "Alice", heure: "11:30", jour: "12", mois: "Avril", annee: "2024" },
            { nom: "Smith", prenom: "Alice", heure: "11:30", jour: "12", mois: "Avril", annee: "2024" },
            { nom: "Smith", prenom: "Alice", heure: "11:30", jour: "12", mois: "Avril", annee: "2024" },
            { nom: "Smith", prenom: "Alice", heure: "11:30", jour: "12", mois: "Avril", annee: "2024" },
            { nom: "Smith", prenom: "Alice", heure: "11:30", jour: "12", mois: "Avril", annee: "2024" },
            { nom: "Smith", prenom: "Alice", heure: "11:30", jour: "12", mois: "Avril", annee: "2024" },
            { nom: "Smith", prenom: "Alice", heure: "11:30", jour: "12", mois: "Avril", annee: "2024" }
        ];
        setRdvEnCours(data);
    }, []);
    return (
        <div className="h-screen w-full overflow-y-scroll flex flex-col gap-2">
            {rdvEnCours.map((rdv, index) => (
                <RdvItem key={index} rdv={rdv} />
            ))}
        </div>
    );
}
function RdvItem({ rdv }) {
    return (
        <div className="border border-bleuFonce p-4 rounded-xl bg-nuanceBlanc">
        <div className="">
            <div className="flex items-center justify-between mt-2 flex-wrap 2xl:flex-nowrap gap-3">
                <Chip
                    className="text-white bg-bleuFonce rounded-lg px-4 py-2 mx-1 w-fit h-10"
                    value={`${rdv.prenom} ${rdv.nom} : ${rdv.heure} ${rdv.jour} ${rdv.mois} ${rdv.annee}`}
                />
                <div className="flex items-center justify-between gap-4">
                    <Button className="bg-red-700 text-white rounded px-4 py-2 w-44">Supprimer</Button>
                </div>
            </div>
        </div>
    </div>
);
}
