import Navbar from "../components/rick-and-morty/Navbar";
import styled from "styled-components";

import logo from "../asset/Rick_and_Morty_logo.png";

const Container = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #85d2d0;
`;

const Logo = styled.div`
  width: 100%;
  height: 100px;
  background: url(${logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  @media (min-width: 768px) {
    height: 150px;
  }
`;

export default function RickAndMortyPage() {
  return (
    <Container>
      <Logo></Logo>
      <Navbar />
    </Container>
  );
}
