import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {ThemeProvider} from "@material-tailwind/react";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Outlet} from "react-router-dom";
import {Footer} from "./Composants/Footer.jsx";
import {Accueil} from "./Pages/Accueil.jsx";
import {BarreNavigation} from "./Composants/BarreNavigation.jsx";
import {BackOffice} from "./Pages/BackOffice.jsx"

function Layout() {
    return (
        <div className={'w-10/12 md:container mx-auto'}>
            <BarreNavigation></BarreNavigation>
            <Outlet/>
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
                element: <div></div>
            },
            {
                path: '/recherche',
                element: <div></div>
            },
            {
                path: '/backoffice',
                element: <BackOffice/>
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
