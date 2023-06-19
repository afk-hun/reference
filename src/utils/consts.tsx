import ChuckNorrisCard from "../components/cards/chuckNorris/ChuckNorrisCard";
import CitibikesCard from "../components/cards/citibikes/CitibikesCard";
import CocktailCard from "../components/cards/cocktail_recipes/CocktailCard";
import CryptoCard from "../components/cards/crypto/CryptoCard";
import DomainSearchCard from "../components/cards/domain_search/DomainSearchCard";
import NASACard from "../components/cards/nasa/NASACard";
import NASAPage from "../pages/NASAPage";
import PhotoCard from "../components/cards/photo/PhotoCard";
import PhotoPage from "../pages/PhotoPage";
import PokemonCard from "../components/cards/pokemon/PokemonCard";
import PokemonPage from "../pages/PokemonPage";
import ResumeCard from "../components/cards/resume/ResumeCard";
import ResumePage from "../pages/ResumePage";
import RickAndMortyCard from "../components/cards/rick_n_morty/RickAndMortyCard";
import RickAndMortyPage from "../pages/RickAndMortyPage";
import WeatherCard from "../components/cards/weather/WeatherCard";
import CitibikesPage from "../pages/CitibikesPage";
import CocktailRecipesPage from "../pages/CocktailRecipesPage";
import CryptoPage from "../pages/CryptoPage";
import DomainSearchPage from "../pages/DomainSearchPage";

import { cardItem } from "./types";

export const CARDS: cardItem[] = [
    { name: "Photo", 
        path:'/photo', 
        page:<PhotoPage />, 
        element: <PhotoCard path='/photo' /> },
    { name: "Weather" , 
        path: '/',
        element: <WeatherCard path="/" /> },
    { name: "Rick and Morty", 
        path:'/rick-n-morty', 
        page: <RickAndMortyPage />,
        element: <RickAndMortyCard path="/rick-n-morty" />},
    { name: "Crypto", 
        path: '/crypto', 
        page: <CryptoPage />, 
        element: <CryptoCard path="/crypto" />},
    { name: "Domain Search", 
        path: '/domain-search', 
        page: <DomainSearchPage />,
        element: <DomainSearchCard path="/domain-search" /> },
    { name: "Pokemon", 
        path: '/pokemon', 
        page: <PokemonPage />,
        element: <PokemonCard path="/pokemon" /> },
    { name: "NASA", 
        path: '/nasa', 
        page: <NASAPage />,
        element: <NASACard path="/nasa" /> },
    { name: "Citibikes", 
        path: '/citibikes', 
        page: <CitibikesPage />,
        element: <CitibikesCard path="/citibikes" /> },
    { name: "Chuck Norris", 
        path:'/', 
        element: <ChuckNorrisCard path='/' /> },
    { name: "Cocktail recipes", 
        path: '/cocktail-recipes', 
        page: <CocktailRecipesPage />,
        element: <CocktailCard path="/cocktail-recipes" /> },
    { name: "Resume", 
        path: '/resume', 
        page: <ResumePage />,
        element: <ResumeCard path="/resume" /> },
  ];