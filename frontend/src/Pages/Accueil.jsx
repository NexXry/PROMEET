import React from "react";
import SearchBar from '../Composants/SearchBar.jsx';
import { HeadAfterBNav } from "../Composants/HeadAfterBNav.jsx";
import { Formulaire } from "../Composants/Formulaire";

export const Accueil = () => {
    // Fonction pour effectuer la recherche
    const handleSearch = (query) => {
        // Effectuer la recherche ici (dans votre cas, vous pouvez laisser vide car c'est la page d'accueil)
        // Cette fonction est nécessaire pour que la prop handleSearch soit correctement transmise à SearchBar
    }

    return (
        <div>
            <HeadAfterBNav />
            {/* Passer la fonction handleSearch en tant que prop à SearchBar */}
            <SearchBar search={false} handleSearch={handleSearch} />
            <Formulaire />
        </div>
    );
}
