import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchAllCharacters, fetchFilteredCharacters, selectCharacterInfo, selectCharacters } from "../slices/rick-n-morty/rick-and-morty-slice";

const RickAndMortyPage = () => {
    const dispatch = useAppDispatch();
    const character = useAppSelector(selectCharacters);
    const characterInfo = useAppSelector(selectCharacterInfo);

    useEffect( () => {

        if (character === null) {
            console.log('dispatching')
            // dispatch(fetchAllCharacters())
            dispatch(fetchFilteredCharacters({name: 'rick', status: 'alive'}))
        }
    })

    return (
        <div>
            Rick and Morty
            <div>
              {characterInfo !== null && character!.map( (item) => <p key={item.id}>{item.name}</p>)}
            </div>
        </div>
    )
}

export default RickAndMortyPage;