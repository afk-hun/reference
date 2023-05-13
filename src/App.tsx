import "./App.scss";
import Card from "./components/card/Card";

type cardItem = {
  name: string;
};

const CARDS: cardItem[] = [
  { name: "Photo" },
  { name: "Weather" },
  { name: "Rick and Morty" },
  { name: "Crypto" },
  { name: "Domain Search" },
  { name: "Chuck Norris" },
  { name: "Pokemon" },
  { name: "NASA" },
  { name: "Citibikes" },
  { name: "Google translate" },
  { name: "Cocktail recipes" },
  { name: "Resume" },
];

function App() {
  return (
    <div className="App">
      {/* Hej trevligt att träffas!  */}

      {CARDS.map((item) => {
        return <Card key={item.name} name={item.name}></Card>;
      })}
    </div>
  );
}

export default App;
