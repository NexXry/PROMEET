import { Button, Input } from "@material-tailwind/react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";

function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

const SearchBar = ({ search, handleSearch }) => {
    const params = useQuery();
    const [query, setQuery] = useState("");

    // Supprimez la fonction profilesRetrieved

    // Modifiez handleSearch pour utiliser handleSearch de la prop
    function handleSubmit(event) {
        event.preventDefault();
        handleSearch(query); // Appel à la fonction handleSearch avec la valeur de la recherche
    }

    return (
        <form onSubmit={handleSubmit}
            className="w-full mx-auto rounded-xl bg-nuanceBlanc border border-bleuFonce py-4 px-2">
            <label htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative flex w-full">
                <Input
                    name={"query"}
                    type="search"
                    label="Trouver un PRO"
                    className="pr-20"
                    required
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                />
                {search ? <Button
                    type={"submit"}
                    size="sm"
                    className="!absolute right-1 top-1 rounded text-white bg-bleuFonce flex items-center gap-3"
                >
                    <svg className="w-4 h-4 text-white " aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    Chercher
                </Button>
                    :
                    <Link to={query ? '/recherche?q=' + query : '/recherche'}
                        className="!absolute right-1 top-1 rounded text-white bg-bleuFonce flex items-center gap-3 py-1 px-2"
                    >
                        <svg className="w-4 h-4 text-white " aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        Chercher
                    </Link>
                }
            </div>
            <div className="h-1 bg-blue-900 w-full mt-2 rounded"></div>
            <div className="flex justify-center mt-2 flex-wrap 2xl:flex-nowrap gap-3">
                {[...Array(6)].map((_, index) => (
                    <button key={index}
                        className="text-white font-bold bg-bleuFonce rounded-lg px-4 py-2 mx-1 w-44 2xl:w-full break-words">Analyste</button>
                ))}
            </div>
        </form>
    );
};

export default SearchBar;
