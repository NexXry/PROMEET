import React, { useState } from "react";
import SearchBar from '../Composants/SearchBar.jsx';
import CardProfile from '../Composants/CardProfile.jsx';
import { Typography } from "@material-tailwind/react";

export function Recherche() {
    const [profiles, setProfiles] = useState([]);

    // Fonction pour effectuer la recherche
    const handleSearch = (query) => {
        // Effectuer la recherche ici et mettre à jour les profils
        axios.get('http://localhost:8000/recherche?q=' + query).then((response) => {
            setProfiles(response.data.find);
        });
    }

    return (
        <div>
            <Typography variant="h2" className="mb-8 text-bleuFonce">
                Recherche
            </Typography>
            {/* Passer la fonction handleSearch en tant que prop à SearchBar */}
            <SearchBar search={true} handleSearch={handleSearch} />

            <div className="flex flex-wrap justify-center">
                {/* Afficher les profils */}
                {profiles.map((item, index) => (
                    <CardProfile key={index} data={item} />
                ))}
            </div>
        </div>
    );
}
