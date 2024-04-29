import { Button, Chip, Typography } from "@material-tailwind/react";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { authStore } from "../store/authStore.js";
import { parseISO, addSeconds } from 'date-fns';

const formatDateFromApi = (data) => {
    const dateDebut = parseISO(`${data.date}T00:00:00`);

    const dateHeureDebut = addSeconds(dateDebut, data.heure_debut);
    const dateHeureFin = addSeconds(dateDebut, data.heure_fin);

    return [dateHeureDebut, dateHeureFin];
}

// Function to convert seconds to HH:MM:SS format
const secondsToHHMMSS = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds - (hours * 3600)) / 60);
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}`;
}

export const RdvListe = ({ nom, prenom, heure, jour, mois, annee }) => {
    const [rdvEnCours, setRdvEnCours] = useState([]);
    const { auth } = authStore();

    useEffect(() => {
        axios.get(`http://localhost:8000/liste-rendez-vous`, {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${auth.token}`
            }
        })
            .then(response => {
                const currentDate = new Date();
                const filteredRdv = response.data.data.filter(rdv => {
                    const [dateHeureDebut] = formatDateFromApi(rdv);
                    return dateHeureDebut > currentDate;
                });
                setRdvEnCours(filteredRdv);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

    }, []);

    return (
        <div className="w-full flex flex-col gap-2 my-10">
            <Typography variant={"h1"} className="font-bold text-xl text-bleuFonce text-center mb-6">
                Gestion des rendez-vous
            </Typography>
            <div className={"h-screen w-full overflow-y-scroll"}>
                {rdvEnCours.map((rdv, index) => (
                    <RdvItem key={index} rdv={rdv} />
                ))}
            </div>
        </div>
    );
}

function RdvItem({ rdv }) {
    const heureFormatted = secondsToHHMMSS(rdv.heure_debut)

    return (
        <div className="border border-bleuFonce p-4 rounded-xl bg-nuanceBlanc">
            <div className="flex items-center justify-between mt-2 flex-wrap 2xl:flex-nowrap gap-3">
                <Chip
                    className="text-white bg-bleuFonce rounded-lg px-4 py-2 mx-1 w-fit h-10"
                    value={`${rdv.nom_pro} reçoit ${rdv.nom_demandeur} le ${rdv.date} à ${heureFormatted}`}
                />
                <div className="flex items-center justify-between gap-4">
                    <Button className="bg-red-700 text-white rounded px-4 py-2 w-44">Supprimer</Button>
                </div>
            </div>
        </div>
    );
}
