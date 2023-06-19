import Card from "../../card/Card"

interface CocktailProps {
    path: string;
}

const CocktailCard = (props: CocktailProps) => {
    return (<Card name={"Crypto"} path={props.path} />)
}

export default CocktailCard;