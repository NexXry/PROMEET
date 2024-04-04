import SearchBar from '../Composants/SearchBar.jsx';
import CardProfile from '../Composants/CardProfile.jsx';
import React, {useState} from "react";
import {
    Typography
  } from "@material-tailwind/react";

export function Recherche(){
    const [profiles, setProfiles] = useState();

    // Function to receive data from ChildComponentA
    const receiveDataFromChild = (dataFromChild) => {
        setProfiles(dataFromChild);
    }

    return (
        <div>
            <Typography variant="h2" className="mb-8 text-bleuFonce">
                Recherche
            </Typography>
            <SearchBar search={true} profilesRetrieved={receiveDataFromChild}/>

            <div class="flex flex-wrap justify-center">
                    
                {profiles == null? "":profiles.map((item, index) => (
                    <CardProfile key={index} data={item} /> // Rendering a child component for each item in data
                ))}
                    
            </div>

        </div>
    )
}

