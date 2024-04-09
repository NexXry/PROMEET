import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Typography,
} from "@material-tailwind/react";
import {Chip} from "@material-tailwind/react";
import {Link} from "react-router-dom";

export const CardProfile = ({profil}) => {

    function displayCompetence() {
        return profil.competences.split(',').map((competence, index) => (
            <Chip className=" bg-bleuFonce hidden lg:inline-block" key={index}
                  value={competence.trim()}/>
        ))
    }

    return (
        <Card className="my-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
                <img
                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    alt="card-image"
                />
            </CardHeader>

            <CardBody>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    {profil.prenom + " " + profil.nom}{/*on affiche les infos de chaque objet*/}
                </Typography>

                {profil.domaine && profil.sous_domaine ? profil.domaine + " - " + profil.sous_domaine + " - " : ""}
                <div className="flex flex-wrap items-end gap-2 my-2">
                    {profil?.competences ? displayCompetence() : <></>}
                </div>

                <p className={"break-all"}>
                    {profil.description?.length > 100 ? profil.description.slice(0, 100) + '...' : profil.description}
                </p>
            </CardBody>

            <CardFooter className="pt-0">
                <Link to={'/profil/' + profil.id} className="w-fit 2xl:w-full h-14">
                    <Button
                        className="text-white font-bold bg-bleuFonce rounded-lg px-4 py-2 mx-1 w-44 2xl:w-full break-words">
                        Voir profil
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
};

export default CardProfile;
