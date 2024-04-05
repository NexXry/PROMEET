import React, { useState } from 'react';

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
            <button className="ml-8 bg-bleuFonce text-white px-4 py-2 rounded">Chercher</button>
            <div className="grid grid-cols-3 gap-4">
               
                    <div className="flex justify-center mt-2 flex-wrap 2xl:flex-nowrap gap-3">
                    <button className="text-white bg-bleuFonce rounded-lg px-4 py-2 mx-1 w-44 2xl:w-full break-words">Michael_durand:Analyste</button>
                        <div className="flex items-center gap-x-4 mt-4 flex justify-between">
                            <button className="bg-bleuFonce text-white px-3 py-1 rounded"> Voir_Profil </button> 
                            <button className="bg-bleuFonce text-white px-3 py-1 rounded">Supprimer</button>
                        </div>
                    </div>
            </div>
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
