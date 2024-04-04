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
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold my-4">Liste des Profils</h1>
            <div className="grid grid-cols-3 gap-4">
                {profils.map((profil) => (
                    <div key={profil.id} className="bg-gray-200 rounded p-4 flex flex-col justify-between">
                        <div>
                            <h2 className="text-lg font-semibold">{profil.name}</h2>
                            <p className="text-gray-600">{profil.job}</p>
                        </div>
                        <div className="mt-4 flex justify-between">
                            <button onClick={() => handleProfileView(profil)} className="bg-blue-500 text-white px-3 py-1 rounded">Voir Profil</button>
                            <button onClick={() => handleDeleteProfile(profil.id)} className="bg-red-500 text-white px-3 py-1 rounded">Supprimer</button>
                        </div>
                    </div>
                ))}
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
