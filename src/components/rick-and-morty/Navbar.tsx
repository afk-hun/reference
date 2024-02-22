import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Section = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 2rem 0;
`;
const NavDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  width: 7rem;
  text-decoration: none;
  color: #fff4bd;
  border-radius: 4px;
  border: #fff4bd 2px solid;
  padding: 1rem;
  background-color: #887bb0;

  &:hover {
    background-color: #fff4bd;
    border: #887bb0 2px solid;
    color: #887bb0;
  }

  &:active {
    background-color: #dbcf97;
  }
`;

export default function Navbar() {
  return (
    <Section>
      <NavDiv>
        <NavLink to="/rick-and-morty/characters">Characters</NavLink>
        <NavLink to="/rick-and-morty/locations">Locations</NavLink>
        <NavLink to="/rick-and-morty/episodes">Episodes</NavLink>
      </NavDiv>
      <div>
        <Outlet />
      </div>
    </Section>
  );
}
