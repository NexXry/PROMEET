import {useState, useCallback, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Button, Card, CardBody, Dialog, Input, Typography} from '@material-tailwind/react';
import {Calendar, dateFnsLocalizer, Views} from 'react-big-calendar';
import {format, parse, startOfWeek, getDay, isEqual, parseISO, addSeconds} from 'date-fns';
import {isPast} from 'date-fns';
import {toast} from 'react-toastify';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import fr from 'date-fns/locale/fr';
import axios from "axios";

const locales = {
    fr: fr,
};

const messages = {
    next: 'Suivant',
    previous: 'Précédent',
    today: "Aujourd'hui",
    month: 'Mois',
    work_week: 'Semaine',
    week: 'Semaine',
    day: 'Jour',
    agenda: 'Agenda',
    date: 'Date',
    time: 'Heure',
    event: 'Rendez-vous',
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

export function Rdv() {
    const [events, setEvents] = useState([]);
    const [nom, setNom] = useState();
    const [title, setTitle] = useState('');
    const [incomEvent, setIncomEvent] = useState({});
    const [open, setOpen] = useState(false);
    const {id} = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/rendez_vous/' + id).then((response) => {
            console.log(response.data.data)
            const rdvs = response.data.data.map((rdv) => {
                const dates = formatDateFromApi(rdv)
                return {title: rdv.message, start: dates[0], end: dates[1]}
            })
            setEvents(rdvs)
        })

    }, []);

    const handleOpen = () => setOpen(!open);

    const formatDateFromApi = (data) => {
        const dateDebutISO = `${data.date}T00:00:00`;
        const dateDebut = parseISO(dateDebutISO);

        const heureDebutEnSecondes = data.heure_debut;
        const heureFinEnSecondes = data.heure_fin;

        const dateHeureDebut = addSeconds(dateDebut, heureDebutEnSecondes);
        const dateHeureFin = addSeconds(dateDebut, heureFinEnSecondes);

        return [dateHeureDebut, dateHeureFin]
    }

    const handleSelectSlot = useCallback(({action, start, end}) => {
        if (action !== 'select') {
            if (!isPast(start)) {
                if (events.find((event) => isEqual(event.start, start) && isEqual(event.end, end))) {
                    toast('Il y a déjà un rendez-vous sur cette plage horaire.', {
                        type: 'error',
                    });
                } else {
                    handleOpen();
                    setIncomEvent({start, end});
                }
            } else {
                toast('Vous ne pouvez pas prendre de rendez-vous dans le passé', {
                    type: 'error',
                });
            }
        }
    }, [events, handleOpen]);

    const handleCreateEvent = () => {
        const {start, end} = incomEvent;
        const newEvent = {
            title: title,
            start: start,
            end: end,
        };

        setEvents([...events, newEvent]);
        handleOpen();
        setTitle('');
    };

    return (
        <div className="flex flex-col gap-4 my-20">
            <Typography variant="h1" className="text-2xl text-center text-bleuFonce">
                Réservez un rendez-vous avec {nom}
            </Typography>

            <Calendar
                localizer={localizer}
                events={events}
                onSelectSlot={handleSelectSlot}
                selectable
                culture="fr"
                messages={messages}
                startAccessor="start"
                endAccessor="end"
                defaultView={Views.WORK_WEEK}
                views={[Views.WORK_WEEK, Views.DAY]}
                style={{height: 900}}
                className="my-10"
                min={new Date(null, null, 0, 8, 0)}
                max={new Date(null, null, 0, 18, 0)}
            />

            <Dialog size="xs" open={open} onClose={handleOpen} className="bg-transparent shadow-none">
                <Card className="mx-auto w-full max-w-[24rem]">
                    <CardBody className="flex flex-col gap-4">
                        <Typography className="mb-2" variant="h6">
                            Laissez un message
                        </Typography>
                        <Input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            label="Besoin d'une expertise"
                            size="lg"
                        />
                        <Button onClick={handleCreateEvent} className="bg-bleuFonce text-white w-full mt-4">
                            Valider
                        </Button>
                    </CardBody>
                </Card>
            </Dialog>
        </div>
    );
}
