import {ProfilListe} from "../Composants/ProfilListe"

export const BackOffice = () => {
    const [selectedProfile, setSelectedProfile] = useState(null);

    return (
        <>
            <ProfilListe></ProfilListe>
        </>
    )
}
