import Card from "../../card/Card"

interface NASAProps {
    path: string;
}

const NASACard = (props: NASAProps) => {
    return (<Card name={"NASA"} path={props.path} />)
}

export default NASACard;