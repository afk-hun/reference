import styled from "styled-components";
import skeletonImg from "../../../asset/skeleton.jpeg";

export const Modal = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #85d2d087;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
`;

export const Navigation = styled.div`
  display: flex;
  padding: 1rem 1rem 0 1rem;
  justify-content: center;
  gap: 1rem;
`;

export const NavigationButton = styled.button`
  box-sizing: border-box;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #887bb0;
  color: #fff4bd;
  width: 6rem;
  height: 2rem;
  align-self: flex-end;
  border-radius: 4px;

  &:hover {
    border: 1px solid #fff4bd;
    cursor: pointer;
  }

  &:active {
    background-color: #665c84;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #fff4bd;
  color: #887bb0;
  border-radius: 4px;
`;

export const CharacterContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 1rem;
  padding: 1rem;
  gap: 1rem;
  border: 1px solid #887bb0;
  border-radius: 4px;
`;

export const CharacterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const Character = styled.div<{ $background: string }>`
  display: flex;
  justify-content: center;
  align-items: end;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  background: url(${(props) =>
    props.$background ? props.$background : skeletonImg});
  background-size: cover;
`;

export const CharacterName = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 10px;
`;

export const TableHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const TableHeaderTitle = styled.h1`
  display: flex;
  flex-grow: 1;
  margin: 0;
  inline-size: 170px;
  overflow-wrap: break-word;
  font-weight: 600;
  font-size: 1rem;
`;

export const TableHeaderSubtitle = styled.h1`
  display: flex;
  flex-grow: 1;
  margin: 0;
  inline-size: 170px;
  overflow-wrap: break-word;
  font-weight: 300;
  font-size: 1rem;
`;

export const TableHeaderEmpty = styled.h1`
  min-width: 80px;
  margin: 0;
  font-size: 1rem;
`;
export const More = styled.a`
  margin: 0;
  padding: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 80px;
  max-height: 24px;
  color: #fff4bd;
  background: #887bb0;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
`;

export const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-sizing: border-box;
  align-items: center;
  /* width: 100%; */

  @media (min-width: 1024px) {
    /* max-width: 1000px; */
  }
`;
export const Content = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  color: #887bb0;
  border-radius: 4px;
  border: 2px solid #887bb0;
  gap: 0.5rem;
  //max-width: 768px;
  padding: 0 0.5rem 0.5rem 0.5rem;
  width: 100%;

  @media (min-width: 768px) {
    //width: 100%;
    padding: 0 2rem 1.5rem 2rem;
  }

  @media (min-width: 1024px) {
    max-width: 1000px;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ItemName = styled.h1`
  display: flex;
  align-items: center;
  inline-size: 170px;
  overflow-wrap: break-word;
  flex-grow: 1;
  margin: 0;
  font-size: 1rem;

  @media (min-width: 768px) {
    //inline-size: 200px;
  }
`;
