import {useEffect} from "react";
import {authStore} from "../store/authStore.js";
import { useNavigate  } from "react-router-dom";

export const Deconnexion = () => {
    const {logout} = authStore();
    const navigate = useNavigate();

    useEffect(() => {
        logout();
        navigate("/");
    }, []);
    return (
        <></>
    )
}
