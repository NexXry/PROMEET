import  {useRef, useState} from "react";
import {Button, Input} from "@material-tailwind/react";
import axios from "axios";
import {Bounce, toast} from "react-toastify";
import {authStore} from "../store/authStore.js";
import { useNavigate  } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

export function FormConnexion() {
    const {authenticate} = authStore();
    const [showInscription, setShowInscription] = useState(false);
    const [error, setError] = useState(false);
    const password = useRef();
    const confirmPassword = useRef();
    const navigate = useNavigate();

    const toggleInscription = () => {
        setShowInscription(!showInscription);
    };

    const handleInscription = (e) => {
        e.preventDefault();
        let data = new FormData(e.target)
        if (data.get('mdp') !== data.get('confirmPassword')) {
            setError(true)
        } else {
            setError(false)

            if (data.get('nom') !== '' && data.get('prenom') !== '' && data.get('email') !== '' && data.get('telephone') !== '' && data.get('mdp') !== '') {
                const newUser = {
                    nom: data.get('nom'),
                    prenom: data.get('prenom'),
                    email: data.get('email'),
                    telephone: data.get('telephone'),
                    mdp: data.get('mdp')
                }

                axios.post('http://localhost:8000/create-users', newUser).then(response => {
                    if (response.status === 200) {
                        toast('Compte créer avec succèss !', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            transition: Bounce,
                        });
                        toggleInscription()
                    }
                }).catch(() => {
                    toast('Oups... une erreur est survenu !', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    });
                })
            }
        }
    }

    const handleConnexion = (e) => {
        e.preventDefault();
        let data = new FormData(e.target)
        if (data.get('email') !== '' && data.get('password') !== '') {
            const user = {
                username: data.get('email'),
                password: data.get('password')
            }

            axios.post('http://localhost:8000/auth', user).then(response => {
                if (response.status === 200) {
                    toast('Connexion réussi !', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    });
                    const extractedToken = jwtDecode(response.data.access_token)
                    let user = {
                        id: extractedToken.sub.split(',')[0],
                        email: extractedToken.sub.split(',')[1],
                        role: extractedToken.sub.split(',')[2]
                    }
                    authenticate(user,response.data.access_token)
                    setTimeout(() => {
                        navigate('/')
                    },500)
                }
            }).catch(() => {
                toast('Oups... une erreur est survenu !', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            })
        }
    }

    const InscriptionForm = () => {
        return (
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto my-32 md:my-36 lg:my-60 lg:py-0">
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
                                    type="text"
                                    name="telephone"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    label="Téléphone"
                                    required
                                />
                            </div>
                            <div>
                                <Input
                                    type="password"
                                    name="mdp"
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
                <InscriptionForm/>
            ) : (
                <div
                    className="flex flex-col items-center justify-center px-6 py-8 mx-auto my-32 md:my-44 lg:my-60 lg:py-0">
                    <div
                        className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-8 space-y-4 md:space-y-6 sm:p-8 bg-nuanceBlanc">
                            <form className="space-y-6 md:space-y-10" onSubmit={handleConnexion}>
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
