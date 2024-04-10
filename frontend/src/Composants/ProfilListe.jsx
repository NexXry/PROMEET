import {Typography} from "@material-tailwind/react";
import {UtilisateurList} from "./UtilisateurList.jsx";

export const ProfilListe = () => {

    return (
        <div>
            <Typography variant={"h1"} className="font-bold text-xl text-bleuFonce text-center mb-6">
                Gestion des utilisateurs
            </Typography>
            <div className={'h-screen w-full overflow-y-scroll flex flex-col gap-2'}>
                <UtilisateurList id={1} nom={"Castex"} prenom={"Nicolas"} profession={"développeur web"}/>
                <UtilisateurList id={1} nom={"Castex"} prenom={"Nicolas"} profession={"développeur web"}/>
                <UtilisateurList id={1} nom={"Castex"} prenom={"Nicolas"} profession={"développeur web"}/>
            </div>
        </div>
    );
}
