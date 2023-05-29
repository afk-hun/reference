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
    { name: "Photo", path: '/photo', element: <PhotoPage /> },
    { name: "Weather" , path: '/' },
    { name: "Rick and Morty", path:'/rick-n-morty', element: <RickAndMortyPage />  },
    { name: "Crypto", path: '/crypto', element: <CryptoPage /> },
    { name: "Domain Search", path: '/domain-search', element: <DomainSearchPage /> },
    { name: "Chuck Norris", path: '/chuck', element: <ChuckNorrisPage /> },
    { name: "Pokemon", path: '/pokemon', element: <PokemonPage /> },
    { name: "NASA", path: '/nasa', element: <NASAPage /> },
    { name: "Citibikes", path: '/citibikes', element: <CitibikesPage /> },
    { name: "Google translate", path: '/' },
    { name: "Cocktail recipes", path: '/cocktail-recipes', element: <CocktailRecipesPage /> },
    { name: "Resume", path: '/resume', element: <ResumePage /> },
  ];