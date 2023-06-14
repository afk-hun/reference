import Card from "../../card/Card"

interface RickAndMortyProps {
    path: string;
}

const RickAndMortyCard = (props: RickAndMortyProps) => {
    return (<Card name={"Rick and Morty"} path={props.path} />)
}

export default RickAndMortyCard;