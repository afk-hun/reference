import { type ReactNode } from "react";
import styled from "styled-components";
import GitHubLink, { Mode } from "../github/GitHubLink";

const StyledCard = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 50%;
  position: relative;
  margin: 1rem;
  border-radius: 4px;
  box-shadow: 4px 4px 10px rgba(128, 128, 128, 0.808);
  overflow: hidden;
`;

type CardProps = {
  children: ReactNode;
  gitLink: string;
  mode?: Mode;
};

export default function Card(props: CardProps) {
  const { children, mode, gitLink } = props;
  return (
    <StyledCard>
      {children}
      <GitHubLink mode={mode ? mode : "dark"} link={gitLink} />
    </StyledCard>
  );
}
