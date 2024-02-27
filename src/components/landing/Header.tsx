import { Outlet } from "react-router-dom";
import styled from "styled-components";
import logo from "../../asset/AFK_logo.png";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  height: 50px;
  background: whitesmoke;

  @media (min-width: 768px) {
    height: 80px;
  }
`;

const Logo = styled.div`
  height: 55px;
  width: 70px;
  align-self: flex-start;
  background: url(${logo});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;

  @media (min-width: 768px) {
    height: 86px;
    width: 100px;
  }
`;

const Title = styled.h1`
  box-sizing: border-box;
  margin: 0;
  color: #878787;
  font-weight: 100;
  font-size: 2rem;
  line-height: 2rem;
  width: 100%;
  text-align: right;
  align-self: center;

  @media (min-width: 768px) {
    font-size: 3rem;
    line-height: 3rem;
    text-align: center;
    padding-right: 100px;
  }
`;

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <Logo />
        <Title>The Reference page</Title>
      </HeaderContainer>
      <div>
        <Outlet />
      </div>
    </>
  );
}
