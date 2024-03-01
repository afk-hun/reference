import { useNavigate } from "react-router-dom";
import "./landing.scss";
import ChuckNorris from "../chuckNorris/ChuckNorris";
import Card from "./Card";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <section className="section-container">
        <Card
          mode="light"
          gitLink="https://github.com/afk-hun/reference/tree/develop/src/components/rick-and-morty"
        >
          <div
            className="rick-and-morty"
            onClick={() => {
              return navigate("/rick-and-morty/characters");
            }}
          >
            <div className="rick-and-morty-bg" />
            <h1>Rick and Morty</h1>
            <h3>
              The fractured domestic lives of a nihilistic mad scientist and his
              anxious grandson are further complicated by their
              inter-dimensional misadventures.
            </h3>
          </div>
        </Card>
        <Card gitLink="https://github.com/afk-hun/reference/tree/develop/src/components/fake-store">
          <div
            className="fake-store"
            onClick={() => {
              return navigate("/fake-store");
            }}
          >
            <div className="fake-store-bg" />
            <h1 className="fake-store-text">Fake Store</h1>
          </div>
        </Card>
      </section>
      <section className="section-container">
        <Card
          mode="light"
          gitLink={
            "https://github.com/afk-hun/reference/tree/develop/src/components/chuckNorris"
          }
        >
          <ChuckNorris />
        </Card>
      </section>
      <section className="section-container">
        <Card gitLink="https://github.com/afk-hun/reference/tree/develop/src/components/resume">
          <div
            className="resume-frame"
            onClick={() => {
              return navigate("/resume");
            }}
          >
            <h1>
              If you like my reference page and you are interested in who am I
              please check my CV here and contact me.
            </h1>
          </div>
        </Card>
      </section>
    </div>
  );
}
