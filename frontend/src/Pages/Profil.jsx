import {InfoProfil} from "../Composants/InfoProfil"
import {ListRdvUser} from "../Composants/ListRdvUser.jsx";
import {ListRdvAValider} from "../Composants/ListRdvAValider.jsx";
import {authStore} from "../store/authStore.js";
import {useParams} from "react-router-dom";
import {useState} from "react";

export const Profil = () => {
    const [updated, setUpdated] = useState(false);
    const {auth} = authStore()
    const {id} = useParams();
    return (
        <>
            <InfoProfil></InfoProfil>
            {auth?.user?.id == id ?
                <div className={'flex flex-col justify-between gap-10'}>
                    <ListRdvUser updated={updated} setUpdated={setUpdated}/>
                    <ListRdvAValider updated={updated} setUpdated={setUpdated}/>
                </div> :
                ""}
        </>
    )
}
