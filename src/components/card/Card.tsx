import React, { ReactNode, useRef } from "react";

import "./card.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";

interface CardProps {
  name: string;
  path: string;
  children?: ReactNode;
}

type MouseEvent = React.MouseEvent<HTMLDivElement> | undefined;
type DivElement = React.RefObject<HTMLDivElement>;

const Card: React.FC<CardProps> = (props: CardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseX, setMouseX] = useState<number>(0);
  const [mouseY, setMouseY] = useState<number>(0);

  function onMouseMoveHandler(event: MouseEvent): void {
    rotateElement(event, containerRef);
  }

  function onMouseLeaveHandler(event: MouseEvent) {
    containerRef.current?.style.setProperty("--rotateX", 0 + "deg");
    containerRef.current?.style.setProperty("--rotateY", 0 + "deg");
  }

  function rotateElement(event: MouseEvent, element: DivElement) {
    // get mouse position
    setMouseX(event!.nativeEvent.offsetX);
    setMouseY(event!.nativeEvent.offsetY);

    // find the middle
    const middleX = element.current!.clientWidth / 2;
    const middleY = element.current!.clientHeight / 2;

    // get offset from middle as a percentage
    // and tone it down a little
    const offsetX = ((mouseX - middleX) / middleX) * 8;
    const offsetY = ((mouseY - middleY) / middleY) * 8;

    // set rotation
    element.current?.style.setProperty("--rotateX", offsetX + "deg");
    element.current?.style.setProperty("--rotateY", -1 * offsetY + "deg");
  }

  const childitem = ( 
          <div
            className="card-container"
            onMouseMove={onMouseMoveHandler}
            onMouseLeave={onMouseLeaveHandler}
            >
            <div ref={containerRef} className="card-container-front">
              {props.name}
              {props.children}
            </div>
          </div>)

  return (
    <div >
      {props.path !== '/' && <NavLink to={props.path} end style={{ color: "#000", textDecoration: "none" }}>
        {childitem}
      </NavLink>} 
      {props.path === '/' && childitem}
    </div>
  );
};

export default Card;
