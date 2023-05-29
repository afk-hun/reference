import { cardItem } from "../../utils/types";
import Card from "../card/Card"

import './cards.scss';

interface CardsProps {
    cards: cardItem[];
}

const Cards = (props: CardsProps) => {
    return (
        <div className="cards-container">
            {props.cards.map((item) => {
                return <Card 
                            key={item.name} 
                            name={item.name} 
                            path={item.path}>
                                {item.element}
                        </Card>;
            })}
        </div>
    )
}

export default Cards;