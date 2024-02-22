
import Navbar from "../components/rick-and-morty/Navbar";
import styled from "styled-components";

const Container = styled.div`
  background-color: #85d2d0;
`;

export default function RickAndMortyPage() {
  return (
    <Container>
      <h1>Rick and Morty</h1>
      <Navbar />
    </Container>
  );
}
