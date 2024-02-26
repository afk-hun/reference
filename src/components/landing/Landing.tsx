import { useNavigate } from "react-router-dom";
import "./landing.scss";
import ChuckNorris from "../chuckNorris/ChuckNorris";
import GitHubLink from "../github/GitHubLink";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <section className="sub-container">
        <div
          className="link rm"
          onClick={() => {
            return navigate("/rick-and-morty/characters");
          }}
        >
          <div className="rm-container">
            <h1>Rick and Morty</h1>
            {/* <h3>A couple of useful information about this serie.</h3> */}
            <h3>
              The fractured domestic lives of a nihilistic mad scientist and his
              anxious grandson are further complicated by their
              inter-dimensional misadventures.
            </h3>
            <GitHubLink
              mode="light"
              link={
                "https://github.com/afk-hun/reference/tree/develop/src/components/rick-and-morty"
              }
            />
          </div>
        </div>
      </section>
      <section className="sub-container">
        <ChuckNorris />
      </section>
      <section className="sub-container">
        <div
          className="resume-frame"
          onClick={() => {
            return navigate("/resume");
          }}
        >
          If you are interested in who is this guy just check it here 😉
          <GitHubLink
            mode="dark"
            link={
              "https://github.com/afk-hun/reference/tree/develop/src/components/resume"
            }
          />
        </div>
      </section>
    </div>
  );
}
