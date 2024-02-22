import { Link } from "react-router-dom";
import "./landing.scss";
import ChuckNorris from "../chuckNorris/ChuckNorris";

export default function Landing() {
  return (
    <div className="container">
      <section className="sub-container">
        <Link className="link rm" to={"/rick-and-morty/characters"}>
          <div className="rm-container">
            <h1>Rick and Morty</h1>
            {/* <h3>A couple of useful information about this serie.</h3> */}
            <h3>
              The fractured domestic lives of a nihilistic mad scientist and his
              anxious grandson are further complicated by their
              inter-dimensional misadventures.
            </h3>
          </div>
        </Link>
      </section>
      <section className="sub-container">
        <ChuckNorris />
      </section>
      <section className="sub-container">
        <Link className="link" to={""}>
          Resume
        </Link>
      </section>
    </div>
  );
}
