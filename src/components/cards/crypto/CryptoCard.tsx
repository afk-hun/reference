import Card from "../../card/Card"

interface CryptoProps {
    path: string;
}

const CryptoCard = (props: CryptoProps) => {
    return (<Card name={"Crypto"} path={props.path} />)
}

export default CryptoCard;