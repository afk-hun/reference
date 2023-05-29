import Cards from "../components/cards/Cards";
import { CARDS } from "../utils/consts";

const LandingPage = () => {
    return (
       <Cards cards={CARDS}></Cards>
    )
}

export default LandingPage;