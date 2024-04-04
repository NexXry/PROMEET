import React from "react";
import { Avatar, Typography } from "@material-tailwind/react";

export function InfoProfil() {
  return (
    <div>
      <div className="flex items-center w-full">
        <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="xxl"/>
        <div className="border border-bleuFonce p-4 rounded-md m-4 flex-1 bg-nuanceBlanc">
          <Typography variant="h4" className="text-bleuFonce">
            Nom Prenom
          </Typography>
          <Typography variant="paragraph" className="text-bleuFonce">
            Mail Tel
          </Typography>
        </div>
      </div>

      <div className="mx-auto w-full mt-10">
        <div className="border border-bleuFonce p-4 rounded-xl bg-nuanceBlanc">
          <div className="mb-16">
            <h1 className="text-bleuFonce font-semibold mb-2">Description</h1>
          </div>
          <div className="mb-16">
            <h3 className="text-bleuFonce font-medium mb-2">Profession : </h3>
          </div>
          <div className="mb-16">
            <h3 className="text-bleuFonce font-medium mb-2">Compétences : </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
