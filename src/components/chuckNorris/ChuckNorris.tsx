import axios from "axios";
import { MouseEvent, useEffect, useRef, useState } from "react";

import "./chuck-norris.scss";

const ChuckNorris = () => {
  const [joke, setJoke] = useState<string>("");
  const kickButtonRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  const fetchJoke = () => {
    const response = axios.get("https://api.chucknorris.io/jokes/random");
    response
      .then((item: any) => {
        setJoke(item.data.value);
      })
      .catch((rej: any) => {
        console.log(rej.message);
        setJoke(rej.message);
      });
  };

  const applyClick = () => {
    kickButtonRef.current?.classList.add("active");
    textRef.current?.classList.add("active");
  };

  useEffect(() => {
    fetchJoke();
    console.log("useEffect");
  }, []);

  function kickHandler(event: MouseEvent): void {
    applyClick();

    setTimeout(() => {
      kickButtonRef.current?.classList.remove("active");
      textRef.current?.classList.remove("active");
      setJoke("");
      fetchJoke();
    }, 1500);
  }

  return (
    <div className="cn_main_container">
      <div className="cn_container">
        {/* {joke === '' && 'Please wait...'} */}
        {joke !== "" && (
          <p className="text" ref={textRef}>
            {joke}
          </p>
        )}
      </div>
      <div className="norris" ref={kickButtonRef} />
      <div className="kick" onClick={kickHandler}>
        Kick
      </div>
    </div>
  );
};

export default ChuckNorris;
