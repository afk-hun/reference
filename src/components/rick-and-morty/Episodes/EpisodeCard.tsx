import { useState } from "react";
import styled from "styled-components";
import { CharacterType, EpisodeType } from "../Common/types";
import { getDatasByLinks, getDataByLink } from "../../../api/rickAndMortyCalls";
import {
  Container,
  More,
  CharacterContainer,
  CharacterBox,
  Character,
  CharacterName,
  ItemName,
  ItemContainer,
} from "../Common/StyledElements";
import { LeftText, ListContainer } from "../Common/CardElements";

const EpisodeOnAirDate = styled(ItemName)`
  font-weight: 300;
`;

const EpisodeNumber = styled(ItemName)`
  padding-right: 1rem;
  justify-content: flex-end;
  min-width: 80px;
  font-weight: 500;
  inline-size: auto;
`;

const EpisodeCard = (props: EpisodeType) => {
  const [expand, setExpand] = useState<boolean>(false);
  const [residentsState, setResidentsState] = useState<CharacterType[] | null>(
    null
  );
  const { name, air_date, episode, characters } = props;

  async function residentClickHandler() {
    try {
      const response = await getDatasByLinks(characters, getDataByLink);
      setResidentsState(response as CharacterType[]);
      setExpand((prevState) => {
        return !prevState;
      });
    } catch {}
  }

  return (
    <Container>
      <ItemContainer>
        <LeftText>
          <ItemName>{name}</ItemName>
          <EpisodeOnAirDate>{air_date}</EpisodeOnAirDate>
        </LeftText>
        <ListContainer>
          <EpisodeNumber>
            #{episode.substring(episode.length - 2, episode.length)}
          </EpisodeNumber>
          <More
            onClick={() => {
              residentClickHandler();
            }}
          >
            Characters
          </More>
        </ListContainer>
      </ItemContainer>

      {expand && (
        <CharacterContainer>
          {residentsState?.map((resident) => {
            return (
              <CharacterBox key={resident.id}>
                <Character $background={resident.image}></Character>
                <CharacterName>{resident.name}</CharacterName>
              </CharacterBox>
            );
          })}
        </CharacterContainer>
      )}
    </Container>
  );
};

export default EpisodeCard;
