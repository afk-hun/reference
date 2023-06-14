import Card from "../../card/Card"

interface PokemonProps {
    path: string;
}

const PokemonCard = (props: PokemonProps) => {
    return (<Card name={"Pokemon"} path={props.path} />)
}

export default PokemonCard;