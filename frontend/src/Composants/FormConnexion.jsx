import React, {useRef, useState} from "react";
import {Button, Input} from "@material-tailwind/react";

export function FormConnexion() {
    const [showInscription, setShowInscription] = useState(false);
    const [error, setError] = useState(false);
    const password = useRef();
    const confirmPassword = useRef();

    const toggleInscription = () => {
        setShowInscription(!showInscription);
    };

    const handleInscription = (e) => {
        e.preventDefault();
        let data = new FormData(e.target)
        if (data.get('password') !== data.get('confirmPassword')) {
            setError(true)
        } else {
            setError(false)
        }
    }

    const InscriptionForm = () => {
        return (
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto my-32 md:my-52 lg:my-60 lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-8 space-y-4 md:space-y-6 sm:p-8 bg-nuanceBlanc">
                        <form className="space-y-6 md:space-y-10" onSubmit={handleInscription}>
                            <div>
                                <Input
                                    type="text"
                                    name="nom"
                                    id="nom"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    label="Nom"
                                    required
                                />
                            </div>
                            <div>
                                <Input
                                    type="text"
                                    name="prenom"
                                    id="prenom"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    label="Prénom"
                                    required
                                />
                            </div>
                            <div>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    label="Email"
                                    required
                                />
                            </div>
                            <div>
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    inputRef={password}
                                    error={error}
                                    label="Mot de passe"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <Input
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    inputRef={confirmPassword}
                                    error={error}
                                    label="Confirmer le mot de passe"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="flex flex-col-reverse gap-5 md:flex-row justify-between items-center">
                                <Button
                                    variant={'outlined'}
                                    type="button"
                                    onClick={toggleInscription}
                                    className="p-2 text-sm font-medium border border-gray-300 rounded-lg text-bleuFonce px-5 py-2.5 hover:underline dark:text-bleuFonce"
                                >
                                    Annuler
                                </Button>
                                <Button
                                    type="submit"
                                    className="text-white bg-bleuFonce hover:bg-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Enregistrer
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
            {showInscription ? (
                <InscriptionForm />
            ) : (
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto my-32 md:my-52 lg:my-60 lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-8 space-y-4 md:space-y-6 sm:p-8 bg-nuanceBlanc">
                            <form className="space-y-6 md:space-y-10" action="#">
                                <div>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        label="Email"
                                        required
                                    />
                                </div>
                                <div>
                                    <Input
                                        type="password"
                                        name="password"
                                        id="password"
                                        label="Mot de passe"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col-reverse gap-5 md:flex-row justify-between items-center">
                                    <Button
                                        variant={'outlined'}
                                        type="button"
                                        onClick={toggleInscription}
                                        className="p-2 text-sm font-medium border border-gray-300 rounded-lg text-bleuFonce px-5 py-2.5 hover:underline dark:text-bleuFonce"
                                    >
                                        S'inscrire
                                    </Button>
                                    <Button
                                        type="submit"
                                        className="text-white bg-bleuFonce hover:bg-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Se connecter
                                    </Button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
