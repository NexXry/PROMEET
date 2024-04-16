import {Button, Chip} from "@material-tailwind/react";
import {Link} from "react-router-dom";
import axios from 'axios';
import { authStore } from "../store/authStore";
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom";


export const UtilisateurList = ({nom, prenom, profession, id, suppression}) => {
    
    
    
    return (
        <div className="border border-bleuFonce p-4 rounded-xl bg-nuanceBlanc">
            <div className="">
                <div className="flex items-center justify-between mt-2 flex-wrap 2xl:flex-nowrap gap-3">
                    <Chip
                        className="text-white bg-bleuFonce rounded-lg px-4 py-2 mx-1 w-fit h-10"
                        value={prenom + " " + nom + " : " + profession}/>
                    <div className="flex items-center justify-between gap-4">
                        <Link to={'/profil/' + id}>
                            <Button className="bg-bleuFonce text-white rounded px-4 py-2 w-44">Voir Profil</Button>
                        </Link>

                        <Button onClick= {()=> {suppression(id)}} className="bg-red-700 text-white rounded px-4 py-2 w-44">Supprimer</Button>


                    </div>
                </div>
            </div>
        </div>
    )
}
