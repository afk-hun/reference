import { cardItem } from "../../utils/types";

import './cards.scss';

interface CardsProps {
    cards: cardItem[];
}

const Cards = (props: CardsProps) => {
    return (
        <div className="cards-container">
            {props.cards.map((item) => {
                return (<div key={item.name}>{item.element}</div> ) 
                // <Card 
                //             key={item.name} 
                //             name={item.name} 
                //             path={item.path}>
                //                 {item.element}
                //         </Card>;
            })}
        </div>
    )
}

export default Cards;