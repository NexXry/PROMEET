import {Typography} from "@material-tailwind/react";
import {UtilisateurList} from "./UtilisateurList.jsx";
import React, {useState, useEffect} from "react";
import axios from 'axios';

export const ProfilListe = () => {
    const [profiles, setProfiles] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8000/recherche?q=`)
            .then(response => {
                setProfiles(response.data.find);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

    }, []);
    return (
        <div>
            <Typography variant={"h1"} className="font-bold text-xl text-bleuFonce text-center mb-6">
                Gestion des utilisateurs
            </Typography>
            <div className={'h-screen w-full overflow-y-scroll flex flex-col gap-2'}>
                {profiles.map((item, index) => (
                    <UtilisateurList id={item.id} nom={item.nom} prenom={item.prenom} profession={item.domaine}/>
                ))}
            </div>
        </div>
    );
}
