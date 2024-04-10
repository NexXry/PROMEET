import React, { useState } from 'react';
import { ButtonGroup, Button } from "@material-tailwind/react";

export const ProfilListe = ({ profils }) => {
    const [selectedProfile, setSelectedProfile] = useState(null);

    const handleProfileView = (profile) => {
        setSelectedProfile(profile);
    };

    const handleDeleteProfile = (profileId) => {
        // Logique pour supprimer le profil avec l'ID profileId
        console.log(`Profil avec l'ID ${profileId} supprimé`);
    };

    return (
        <div className="border border-bleuFonce p-4 rounded-xl bg-nuanceBlanc">

            <ButtonGroup size="lg">
                <Button className="bg-bleuFonce text-white px-4 py-2 rounded-lg mr-10 w-1/3 text-left">Michael_durand:Analyste</Button>
                <Button className="bg-bleuFonce text-white px-3 py-1 rounded ml-auto">Profil</Button>
                <Button className="bg-bleuFonce text-white px-3 py-1 rounded ml-6 mr-10">Supprimer</Button>
            </ButtonGroup>

            {selectedProfile && (
                <div className="mt-8 bg-gray-200 p-4 rounded">
                    <h2 className="text-xl font-semibold">Profil Intégral de {selectedProfile.name}</h2>
                    <p className="text-gray-600">Métier: {selectedProfile.job}</p>
                    {/* Autres informations du profil */}
                </div>
            )}
        </div>
    );
}
