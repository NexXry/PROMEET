import SearchBar from '../Composants/SearchBar.jsx';
import CardProfile from '../Composants/CardProfile.jsx';
import {useState, useEffect} from "react";
import {
    Typography
} from "@material-tailwind/react";
import axios from 'axios';
import {useLocation} from "react-router-dom";

export function Recherche() {
    const [profiles, setProfiles] = useState([]);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('q');

    useEffect(() => {
        if (query) {
            axios.get(`http://localhost:8000/recherche?q=${query}`)
                .then(response => {
                    setProfiles(response.data.find);
                })
                .catch(() => {
                    console.error('Error fetching data:');
                });
        }
    }, [query]);

    return (
        <div className={"my-20"}>
            <Typography variant="h2" className="mb-8 text-bleuFonce">
                Recherche
            </Typography>
            <SearchBar search={true} profilesRetrieved={setProfiles}/>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
                {profiles.map((item, index) => (
                    <CardProfile key={index} profil={item}/>
                ))}
                {profiles.length === 0 && !query && <Typography className={"border-2 border-bleuFonce text-bleuFonce py-4 px-20 rounded-2xl my-14"}>Faites une recherche</Typography>}
            </div>
        </div>
    );
}

