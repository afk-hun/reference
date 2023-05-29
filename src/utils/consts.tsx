import GTranslate from "../components/gtranslate/GTranslate";
import ChuckNorrisPage from "../pages/ChuckNorrisPage";
import CitibikesPage from "../pages/CitibikesPage";
import CocktailRecipesPage from "../pages/CocktailRecipesPage";
import CryptoPage from "../pages/CryptoPage";
import DomainSearchPage from "../pages/DomainSearchPage";
import NASAPage from "../pages/NASAPage";
import PhotoPage from "../pages/PhotoPage";
import PokemonPage from "../pages/PokemonPage";
import ResumePage from "../pages/ResumePage";
import RickAndMortyPage from "../pages/RickAndMortyPage";
import { cardItem } from "./types";

export const CARDS: cardItem[] = [
    { name: "Photo", path: '/photo', page: <PhotoPage /> },
    { name: "Weather" , path: '/' },
    { name: "Rick and Morty", path:'/rick-n-morty', page: <RickAndMortyPage />  },
    { name: "Crypto", path: '/crypto', page: <CryptoPage /> },
    { name: "Domain Search", path: '/domain-search', page: <DomainSearchPage /> },
    { name: "Chuck Norris", path: '/chuck', page: <ChuckNorrisPage /> },
    { name: "Pokemon", path: '/pokemon', page: <PokemonPage /> },
    { name: "NASA", path: '/nasa', page: <NASAPage /> },
    { name: "Citibikes", path: '/citibikes', page: <CitibikesPage /> },
    { name: "Google translate", path: '/', element: <GTranslate /> },
    { name: "Cocktail recipes", path: '/cocktail-recipes', page: <CocktailRecipesPage /> },
    { name: "Resume", path: '/resume', page: <ResumePage /> },
  ];