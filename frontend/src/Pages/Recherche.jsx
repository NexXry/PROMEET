/*import React, { useState } from "react";
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
            //{/* Passer la fonction handleSearch en tant que prop à SearchBar */
            <SearchBar search={true} handleSearch={handleSearch} />
//
  //          <div className="flex flex-wrap justify-center">
    //            {/* Afficher les profils */}
      //          {profiles.map((item, index) => (
        //            <CardProfile key={index} data={item} />
          //      ))}
            //</div>
        //</div>
    //);
//}


import SearchBar from '../Composants/SearchBar.jsx';
import CardProfile from '../Composants/CardProfile.jsx';
import { Typography } from "@material-tailwind/react";
import axios from 'axios';
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

export function Test2Recherche() {
    const [profiles, setProfiles] = useState([]);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('q');
    useEffect(() => {
        if (query) { 
            axios.get(`http://localhost:8000/recherche?q=${query}`)
                .then(response => {
                    setProfiles(response.data.find);
                    console.log(response.data.find);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    }, [query]);
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