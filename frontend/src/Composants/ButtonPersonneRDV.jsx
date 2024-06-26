import {Button, Typography} from "@material-tailwind/react";
import {Link} from "react-router-dom";

export function ButtonPersonneRDV() {
    return (
        <div className="flex justify-center my-80">
            <div>
                <Typography className="font-bold text-xl text-bleuFonce text-center mb-6">
                    Accueil Back Office
                </Typography>
                <div className="flex w-max gap-20">
                    <Link to="/backoffice/profil">
                        <Button className="w-36 bg-bleuFonce">PERSONNES</Button>
                    </Link>
                    <Link to="/backoffice/rdv">
                        <Button className="w-36 bg-bleuFonce">RDV</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
