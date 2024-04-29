import { useState } from 'react';
import axios from 'axios';
import {
    Card,
    Input,
    Button,
    Typography, Textarea,
} from "@material-tailwind/react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Formulaire() {
    const [formData, setFormData] = useState({
        lastname: '',
        firstname: '',
        email: '',
        phoneNumber: '',
        message: ''
    });

    //mettre à jour l'état des données
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:8000/send_email',
             formData
            );
            toast.success('Message envoyé avec succès', { position: "top-right" });
        } catch (error) {
            toast.error("Erreur lors de l'envoi du message", { position: "top-right" });
        }
    };  
    return (
        <div className="mx-auto w-full mt-10">
            <Card shadow={false}>
                <Typography variant="h4" className="text-center mb-8 text-bleuFonce">
                    Un problème ? Une idée ?
                </Typography>
                <div
                    className="border border-bleuFonce p-4 rounded-xl bg-nuanceBlanc">
                    <form className="mt-8" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <Typography variant="h6" className="text-bleuFonce mb-3">Nom</Typography>
                                <Input
                                    size="lg"
                                    className="border-t-blueGray-300 focus:border-t-blueGray-500"
                                    label="Nom"
                                    name={"lastname"}
                                    onChange={handleChange}
                                required/>
                            </div>
                            <div>
                                <Typography variant="h6" className="text-bleuFonce mb-3">Prénom</Typography>
                                <Input
                                    size="lg"
                                    className="!border-t-blueGray-300 focus:!border-t-blueGray-500"
                                    label="Prénom"
                                    name={"firstname"}
                                    onChange={handleChange}
                                required/>
                            </div>
                            <div>
                                <Typography variant="h6" className="text-bleuFonce mb-3">Email</Typography>
                                <Input
                                    size="lg"
                                    className="!border-t-blueGray-300 focus:!border-t-blueGray-500"
                                    label="Email"
                                    name={"email"}
                                    onChange={handleChange}
                                required/>
                            </div>
                            <div>
                                <Typography variant="h6" className="text-bleuFonce mb-3">Téléphone portable</Typography>
                                <Input
                                    size="lg"
                                    className="!border-t-blueGray-300 focus:!border-t-blueGray-500"
                                    label="Téléphone portable"
                                    name={"phoneNumber"}
                                    onChange={handleChange}
                                required/>
                            </div>
                        </div>
                        <div className="mb-4">
                            <Typography variant="h6" className="text-bleuFonce mb-3">Votre message</Typography>
                            <Textarea label="Votre message"
                                        name={"message"}
                                        onChange={handleChange}
                                      className="px-3 py-2 border border-blue-gray-300 bg-nuanceBlanc rounded w-full"
                                      rows={4}
                            required/>
                        </div>
                        <Button
                            type="submit"
                            size="sm"
                            className="float-right bg-bleuFonce inline-block"
                        >
                            Envoyer
                        </Button>
                    </form>
                </div>
            </Card>
        </div>
    );
}
