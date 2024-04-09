import SearchBar from '../Composants/SearchBar.jsx';
import {HeadAfterBNav} from "../Composants/HeadAfterBNav.jsx"; // Importez le composant de barre de recherche
import {Formulaire} from "../Composants/Formulaire"
import {CarouselDefault} from "../Composants/Carousel.jsx";

export const Accueil = () => {


    return (
        <div>
            <HeadAfterBNav/>
            {/* Passer la fonction handleSearch en tant que prop à SearchBar */}
            <SearchBar search={false}></SearchBar>
            <CarouselDefault/>
            <Formulaire/>
        </div>
    );
}
