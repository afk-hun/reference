import Card from "../../card/Card"

interface DomainSearchProps {
    path: string;
}

const DomainSearchCard = (props: DomainSearchProps) => {
    return (<Card name={"Domain Search"} path={props.path} />)
}

export default DomainSearchCard;