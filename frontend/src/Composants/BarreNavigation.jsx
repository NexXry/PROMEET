import React from "react";
import {
    Navbar,
    Typography,
    Button, IconButton, Collapse,
} from "@material-tailwind/react";
import {Link} from "react-router-dom";

export function BarreNavigation() {
    // State pour gérer l'ouverture/fermeture de la navigation sur mobile
    const [openNav, setOpenNav] = React.useState(false);

    // Effet pour fermer la navigation lorsque la largeur de la fenêtre dépasse 1000px
    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 1000 && setOpenNav(false),
        );
    }, []);

    return (
        // Barre de navigation principale
        <Navbar className="mx-auto shadow-none w-full p-0 py-4">
            <div className="mx-auto flex items-center justify-between">
                {/* Logo ou nom de votre site */}
                <Link
                    href="/"
                    className="mr-4 cursor-pointer py-1.5 font-bold text-xl text-bleuFonce"
                >
                    ProMEET
                </Link>
                <div className="flex items-center gap-x-4">
                    <Button
                        size="sm"
                        className=" bg-bleuFonce hidden lg:inline-block">
                        <span className="text-white">Recherche</span>
                    </Button>
                    {/* Bouton pour se connecter */}
                    <Button
                        size="sm"
                        className=" bg-bleuFonce hidden lg:inline-block"
                    >
                        <span className="text-white">Login</span>
                    </Button>
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-bleuFonce hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={3}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <div className="container mx-auto mt-5">
                    <div className="flex items-center gap-x-5">
                        <Button fullWidth variant="filled" size="sm" className="bg-bleuFonce text-white">
                            <span>Recherche</span>
                        </Button>
                        {/* Bouton pour se connecter */}
                        <Button fullWidth variant="filled" size="sm" className="bg-bleuFonce text-white">
                            <span>Login</span>
                        </Button>
                    </div>
                </div>
            </Collapse>
        </Navbar>
    );
}
