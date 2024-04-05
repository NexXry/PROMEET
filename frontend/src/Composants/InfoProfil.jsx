import React, { useState, useEffect } from "react";
import { Avatar, Typography } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function InfoProfil() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/users/${id}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, [id]);

  return (
    <div className={' my-5 md:my-36'}>
      {user && (
        <div className="flex flex-col md:flex-row gap-6 items-center w-full">
          <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="xxl"/>
          <div className="border border-bleuFonce p-4 rounded-md flex-1 bg-nuanceBlanc w-full">
            <Typography variant="h4" className="text-bleuFonce">
            {user.nom.toUpperCase()} {user.prenom.toUpperCase()}
            </Typography>
            <Typography variant="paragraph" className="text-bleuFonce">
              {user.email ? user.email : ''}
            </Typography>
            <Typography variant="paragraph" className="text-bleuFonce">
              {user.telephone ? user.telephone : ''}
            </Typography>
          </div>
        </div>
      )}

      <div className="mx-auto w-full mt-10">
        {user && (
          <div className="border border-bleuFonce p-4 rounded-xl bg-nuanceBlanc">
            <div className="mb-16">
              <Typography>{user.description_profil ? user.description_profil : ''}</Typography>
            </div>
            <div className="mb-16">
              <h3 className="text-bleuFonce font-medium mb-2">Profession : </h3>
              <Typography>{user.profession ? user.profession : ''}</Typography>
            </div>
            <div className="mb-16">
              <h3 className="text-bleuFonce font-medium mb-2">Entreprise : </h3>
              <Typography>{user.entreprise ? user.entreprise : ''}</Typography>
            </div>
            <div className="mb-16">
              <h3 className="text-bleuFonce font-medium mb-2">Domaine d'activité : </h3>
              <Typography>{user.sous_domaine ? user.sous_domaine : ''}</Typography>
            </div>
            <div className="mb-16">
              <h3 className="text-bleuFonce font-medium mb-2">Compétences :</h3>
              <Typography>{user.competences ? user.competences : ''}</Typography>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
