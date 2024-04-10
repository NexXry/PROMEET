
import { ProfilListe } from "../Composants/ProfilListe"
import axios from "axios";
import React, {useState} from "react";

export const BackOffice = () => {
    const [selectedProfile, setSelectedProfile] = useState(null);

    return (
        <>
            {/* { axios.get('http://localhost:8000/recherche?q=').then((response) => {
                    setSelectedProfile(response.data.find)
                    console.log(response.data.find)
                })
            }
        
            { selectedProfile.map((key, index) => (
                <ProfilListe index></ProfilListe>
            ))} */}
            <ProfilListe></ProfilListe>
        </>
    )
}