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

        toast.success('Message envoyé avec succès', { position: "top-right" });
        try {
            const response = await axios.post('http://localhost:8000/send_email', 
             formData
            );
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Erreur lors de la soumission du formulaire:', error);
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
                                required/>
                            </div>
                            <div>
                                <Typography variant="h6" className="text-bleuFonce mb-3">Prénom</Typography>
                                <Input
                                    size="lg"
                                    className="!border-t-blueGray-300 focus:!border-t-blueGray-500"
                                    label="Prénom"
                                required/>
                            </div>
                            <div>
                                <Typography variant="h6" className="text-bleuFonce mb-3">Email</Typography>
                                <Input
                                    size="lg"
                                    className="!border-t-blueGray-300 focus:!border-t-blueGray-500"
                                    label="Email"
                                required/>
                            </div>
                            <div>
                                <Typography variant="h6" className="text-bleuFonce mb-3">Téléphone portable</Typography>
                                <Input
                                    size="lg"
                                    className="!border-t-blueGray-300 focus:!border-t-blueGray-500"
                                    label="Téléphone portable"
                                required/>
                            </div>
                        </div>
                        <div className="mb-4">
                            <Typography variant="h6" className="text-bleuFonce mb-3">Votre message</Typography>
                            <Textarea label="Votre message"
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
