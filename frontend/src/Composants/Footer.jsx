import {Typography} from "@material-tailwind/react";
import {FaInstagram, FaLinkedin} from "react-icons/fa";

export function Footer() {
    return (
        <footer className="mx-auto flex items-center justify-between py-8 mt-24">
            <Typography className="font-bold text-xl text-bleuFonce">
                &copy; 2024 ProMEET
            </Typography>
            <ul className="flex flex-wrap items-center gap-8">
                <li>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-bleuFonce hover:text-blue-500 focus:text-blue-500"
                    >
                        <FaInstagram className="text-bleuFonce mr-2 text-3xl"/>
                    </a>
                </li>
                <li>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-bleuFonce hover:text-blue-500 focus:text-blue-500"
                    >
                        <FaLinkedin className="text-bleuFonce text-3xl"/>
                    </a>
                </li>
            </ul>
        </footer>
    );
}
