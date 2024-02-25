import styled from "styled-components";
import { MouseEvent } from "react";

import githubIconWhite from "../../asset/github-mark-white.png";
import githubIconDark from "../../asset/github-mark.png";

type Mode = "dark" | "light";

const Frame = styled.div<{ $mode?: Mode }>`
  box-sizing: content-box;
  display: flex;
  align-items: center;
  justify-items: center;
  position: absolute;
  top: 0.7rem;
  left: 0.7rem;
  gap: 0.5rem;
  height: 1.5rem;
  padding: 4px;
  padding-right: 6px;
  border-radius: 20px;

  &:hover {
    div {
      opacity: 100%;
    }
    a {
      width: 100%;
      opacity: 100%;
    }
    border: 1px solid ${({ $mode }) => ($mode === "light" ? "#fff" : "#000")};
    padding: 3px;
    padding-right: 5px;
  }

  @media (min-width: 768px) {
    top: 1rem;
    left: 1rem;
  }
`;

const Icon = styled.div<{ $mode?: Mode }>`
  box-sizing: border-box;
  min-width: 1.5rem;
  min-height: 1.5rem;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 1px;
  opacity: 50%;
  transition: opacity 1s;
  background-image: url(${({ $mode }) =>
    $mode === "light" ? githubIconWhite : githubIconDark});
`;

const Link = styled.a<{ $mode?: Mode }>`
  text-decoration: none;
  overflow: auto;
  width: 0;
  height: 1.2rem;
  opacity: 50%;
  transition: all 1s;
  color: ${({ $mode }) => ($mode === "light" ? "#fff" : "#000")};
`;

type GitHubLinkProps = {
  link: string;
  mode?: Mode;
};

export default function GitHubLink({ link, mode }: GitHubLinkProps) {
  const redirectHandler = (
    event: MouseEvent<HTMLDivElement | HTMLAnchorElement>
  ) => {
    event.preventDefault();
    window.open(link, "_blank");
  };
  return (
    <Frame $mode={mode}>
      <Icon $mode={mode} onClick={redirectHandler} />
      <Link onClick={redirectHandler} target="_blank" $mode={mode}>
        You can find the source here
      </Link>
    </Frame>
  );
}
