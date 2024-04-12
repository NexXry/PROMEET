import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {ThemeProvider} from "@material-tailwind/react";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Outlet} from "react-router-dom";
import {Footer} from "./Composants/Footer.jsx";
import {Accueil} from "./Pages/Accueil.jsx";
import {BarreNavigation} from "./Composants/BarreNavigation.jsx";
import {Connexion} from './Pages/Connexion.jsx';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import {Deconnexion} from "./Composants/Deconnexion.jsx";
import {Profil} from './Pages/Profil.jsx';
import {Recherche} from "./Pages/Recherche.jsx";
import {BackOfficeProfil} from "./Pages/BackOfficeProfil.jsx"
import {BackOffice_RdvListe} from './Pages/BackOffice_RdvListe.jsx';
import {BackOffice_Accueil} from "./Pages/BackOffice_Accueil.jsx"
import {Rdv} from "./Pages/Rdv.jsx";

function Layout() {
    return (
        <div className={'w-10/12 md:container mx-auto'}>
            <BarreNavigation></BarreNavigation>
            <Outlet/>
            <ToastContainer/>
            <Footer/>
        </div>
    );
}

const router = createBrowserRouter([
    {
        element: <Layout/>,
        errorElement: <div>Not Found</div>,
        children: [
            {
                path: '/',
                element: <Accueil/>
            },
            {
                path: '/login',
                element: <Connexion></Connexion>
            },
            {
                path: '/logout',
                element: <Deconnexion></Deconnexion>
            },
            {
                path: '/recherche',
                element: <Recherche></Recherche>
            },
            {
                path: '/profil/:id',
                element: <Profil/>
            },
            {
                path: '/backoffice/profil',
                element: <BackOfficeProfil/>
            },
            {
                path: '/backoffice/rdv',
                element: <BackOffice_RdvListe/>
            },
            {
                path: '/backoffice',
                element: <BackOffice_Accueil/>
            },
            {
                path: '/rdv/:id',
                element: <Rdv/>
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider>
            <RouterProvider router={router}/>
        </ThemeProvider>
    </React.StrictMode>,
)
