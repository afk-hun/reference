import Card from "../../card/Card"

import './rick_and_morty.scss';
interface RickAndMortyProps {
    path: string;
}

const RickAndMortyCard = (props: RickAndMortyProps) => {
    return (<Card name={"Rick and Morty"} path={props.path} >
        <div className="rnm_bg_container" />
        <div className="rnm_container">
            Rick and Morty
        </div>
    </Card>)
}

export default RickAndMortyCard;