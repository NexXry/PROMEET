import {useParams} from "react-router-dom";
import {Typography} from "@material-tailwind/react";

export function Rdv() {
    const {id} = useParams()

    return (
        <div className={'flex flex-col gap-4 my-20'}>
            <Typography variant={"h1"} className={'text-2xl text-center text-bleuFonce'}>Réservez un rendez-vous avec
                Jean
                Michel</Typography>
            {/*   Ajouter calendrier */}
        </div>
    )
}
