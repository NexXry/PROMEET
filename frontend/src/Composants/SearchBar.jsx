import {useState, useEffect} from "react";
import axios from "axios";
import {Button, Input} from "@material-tailwind/react";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const SearchBar = ({search, profilesRetrieved}) => {
    const navigate = useNavigate();
    const [filtres, setFiltres] = useState([]);
    const [query, setQuery] = useState()//setQuery fonction permettant d'initialialiser la reponse a query

    useEffect(() => {
        axios.get('http://localhost:8000/domaine')
            .then(response => {
                let domaines = response.data.find;
                domaines.sort(() => 0.5 - Math.random());
                domaines = domaines.slice(0, 6);
                setFiltres(domaines);
            })
            .catch(error => {
                console.error('Error fetching domaines:', error);
            });
    }, []);


    function handleSearch(event) {
        event.preventDefault() //Eviter de rafraichir la page
        if (search) {
            axios.get('http://localhost:8000/recherche?q=' + event.target.query.value).then((response) => {//ajout de la valeur du parametre query.value
                setQuery(response.data.find) //setQuery initialise la variable query par la réponse de l'api
                profilesRetrieved(response.data.find); //fonction prop pour lui passer la réponse de l'api

            }).catch(() => {
                toast.error('Erreur lors de la recherche');
            });
        } else {
            navigate('/recherche?q=' + event.target.query.value);
        }

    }

    return (
        <form onSubmit={handleSearch}//appel de la fonction handleSearch
              className="w-full mx-auto rounded-xl bg-nuanceBlanc border border-bleuFonce py-4 px-2 my-24">
            <label htmlFor="default-search"
                   className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative flex w-full">
                <Input
                    name={"query"}
                    type="search"
                    label="Trouver un PRO"
                    className="pr-20"
                    required
                    onChange={(event) => setQuery(event.target.value)} //quand on change la valeur du champs, on initialise query avec la valeur entrée dans le champ
                />
                {search ?
                    <Button //If search est true on affiche un bouton, sinon un lien
                        type={"submit"}
                        size="sm"
                        className="!absolute right-1 top-1 rounded text-white bg-bleuFonce flex items-center gap-3"
                    >
                        <svg className="w-4 h-4 text-white " aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        Chercher
                    </Button>
                    : //sinon on affiche un lien de redirection vers la page de recherche
                    <Link
                        to={query ? '/recherche?q=' + query : '/recherche'} //si la valeur du champ passé à query n'est pas vide on passe la valeur q à l'url
                        //sinon on lui passe rien
                        className="!absolute right-1 top-1 rounded text-white bg-bleuFonce flex items-center gap-3 py-1 px-2"
                    >
                        <svg className="w-4 h-4 text-white " aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        Chercher
                    </Link>
                }


            </div>
            <div className="h-1 bg-blue-900 w-full mt-2 rounded"></div>
            <div className="flex justify-center mt-2 flex-wrap 2xl:flex-nowrap gap-3">
                {filtres.map((item, index) => (
                    <Link key={index} to={'/recherche?q=' + item.nom} className="w-fit 2xl:w-full h-14">
                        <Button
                            className="text-white font-bold bg-bleuFonce rounded-lg h-14 px-4 py-2 mx-1 w-44 2xl:w-full break-words">
                            {item.nom}
                        </Button>
                    </Link>
                ))}
            </div>
        </form>
    );
};

export default SearchBar;
