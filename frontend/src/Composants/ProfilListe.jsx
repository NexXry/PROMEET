import {Typography} from "@material-tailwind/react";
import {UtilisateurList} from "./UtilisateurList.jsx";
import React, {useState, useEffect} from "react";
import axios from 'axios';
import { authStore } from "../store/authStore.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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

    const {auth} = authStore();
    const navigate = useNavigate();
    async function handleSuppression(id) {
        try {
            const response = await axios.delete(`http://localhost:8000/delete-users/${id}`,{
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${auth.token}`
                }
            });
            toast('Utilisateur supprimé avec succès.');
            navigate('/backoffice/profil');
            setProfiles([...profiles.filter((profil)=>profil.id != id )])
            // Faire quelque chose avec la réponse si nécessaire
            return response.data; // Renvoie les données supprimées si nécessaire
        } catch (error) {
            console.error('Erreur lors de la suppression de l\'utilisateur:', error);
            throw error; // Renvoie l'erreur pour la gérer ailleurs si nécessaire
        }
        
    }
    return (
        <div>
            <Typography variant={"h1"} className="font-bold text-xl text-bleuFonce text-center mb-6">
                Gestion des utilisateurs
            </Typography>
            <div className={'h-screen w-full overflow-y-scroll flex flex-col gap-2'}>
                {profiles.map((item, index) => (
                    <UtilisateurList key={index} id={item.id} nom={item.nom} prenom={item.prenom}
                                     profession={item.domaine}  suppression={handleSuppression} />

                ))}
            </div>
        </div>
    );
}
