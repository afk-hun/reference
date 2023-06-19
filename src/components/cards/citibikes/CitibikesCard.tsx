import Card from "../../card/Card"

interface CitibikesProps {
    path: string;
}

const CitibikesCard = (props: CitibikesProps) => {
    return (<Card name={"Citibikes"} path={props.path} />)
}

export default CitibikesCard;