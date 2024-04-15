import {InfoProfil} from "../Composants/InfoProfil"
import {ListRdvUser} from "../Composants/ListRdvUser.jsx";
import {ListRdvAValider} from "../Composants/ListRdvAValider.jsx";
import {authStore} from "../store/authStore.js";
import {useParams} from "react-router-dom";

export const Profil = () => {
    const {auth} = authStore()
    const {id} = useParams();
    return (
        <>
            <InfoProfil></InfoProfil>
            {auth?.user?.id == id ?
                <div className={'flex flex-col lg:flex-row justify-between gap-10'}>
                    <ListRdvUser/>
                    <ListRdvAValider/>
                </div> :
                ""}
        </>
    )
}
