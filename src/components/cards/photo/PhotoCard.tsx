import Card from "../../card/Card"

interface PhotoProps {
    path: string;
}

const PhotoCard = (props: PhotoProps) => {
    return (<Card name={"Photo"} path={props.path} />)
}

export default PhotoCard;