import styled from "styled-components";
import { MouseEvent } from "react";
import skeletonImage from "../../../asset/skeleton.jpeg";
import { useEffect, useState } from "react";
import { getDatasByLinks, getDataByLink } from "../../../api/rickAndMortyCalls";
import { useDefaultIfUnknown } from "../../../utils/utilityFunctions";
import { CharacterType, EpisodeType } from "../Common/types";
import { LeftText } from "../Common/CardElements";

const DetailsContainer = styled.div`
  background-color: #fff4bd;
  position: relative;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  color: #887bb0;
  border-radius: 4px;
  margin: 0.5rem;
`;

const ScrollableDiv = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const Name = styled.h1`
  @media (min-width: 667px) and (min-height: 375px) {
    margin: 0.5rem 0 0.5rem 0;
  }

  @media (min-width: 667px) {
    margin: 1rem 0 1rem 0;
  }
`;

const ExtractsContainer = styled.div`
  display: flex;
  flex-grow: 1;
`;

const ExtractsTitle = styled.p`
  margin: 0;
  max-width: 8rem;
  min-width: 4.5rem;
  margin-bottom: 0.5rem;
`;

const Extracts = styled.p`
  margin: 0;
  width: 15rem;
`;

const EpisodeContainer = styled.div`
  display: flex;
  //height: 3rem;
  background-color: #887bb0;
  color: #fff4bd;
  padding: 0.5rem;
`;
const EpisodeName = styled.h1`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  flex-wrap: wrap;
  width: 100%;
`;
const EpisodeOnAirDate = styled.p`
  display: flex;
  align-items: center;
  margin: 0;
  min-width: 150px;
`;
const EpisodeNumber = styled.p`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 80px;
  margin: 0;
`;
const EpisodeTable = styled.div`
  border: 2px solid #887bb0;
  border-radius: 4px;
`;

const TableHeaderContainer = styled.div`
  display: flex;
  padding: 0.5rem;
`;
const TableHeaderTitle = styled.p`
  margin: 0;
  width: 100%;
  font-weight: 600;
`;
const TableHeaderOnAir = styled.p`
  margin: 0;
  min-width: 150px;
  font-weight: 600;
`;
const TableHeaderNumber = styled.p`
  display: flex;
  justify-content: flex-end;
  margin: 0;
  min-width: 80px;
  font-weight: 600;
`;

const Close = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 1rem;
  right: 1rem;
  text-decoration: none;
  background-color: #fff4bd;
  border-radius: 50%;
  width: 1.3rem;
  height: 1.3rem;
  color: #887bb0;
  font-weight: 800;
  cursor: pointer;
  border: #887bb0 1px solid;

  &:hover {
    border: #fff4bd 1px solid;
    background-color: #887bb0;
    color: #fff4bd;
  }
`;
const EpisodeList = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  width: 100%;
  max-height: 200px;
  background-color: #fff4bd;
  gap: 0.2rem 0;
`;

const Episode = (props: EpisodeType) => {
  const { name, air_date, episode } = props;
  return (
    <EpisodeContainer>
      <LeftText>
        <EpisodeName>{name}</EpisodeName>
        <EpisodeOnAirDate>{air_date}</EpisodeOnAirDate>
      </LeftText>
      <EpisodeNumber>{episode}</EpisodeNumber>
    </EpisodeContainer>
  );
};

type CharacterImageProps = {
  $path?: string;
  $isDead?: boolean;
};
const CharacterImage = styled.img<CharacterImageProps>`
  content: url(${(props) => (props.$path ? props.$path : skeletonImage)});
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 0 0 0 50%;
  width: 150px;
  height: 150px;
  filter: ${(props) => {
    if (props.$isDead) {
      return "grayscale(100%);";
    }
  }};

  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

type CharacterDetailsProps = {
  onClick: (event: MouseEvent<HTMLAnchorElement>) => void;
} & CharacterType;

export default function CharacterDetails(props: CharacterDetailsProps) {
  const { name, status, species, gender, origin, location, image, episode } =
    props;

  const [episodes, setEpisodes] = useState<EpisodeType[]>([]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await getDatasByLinks(episode, getDataByLink);

        setEpisodes(response as EpisodeType[]);
      } catch {}
    };
    fetchEpisodes();
  }, [episode]);

  return (
    <DetailsContainer>
      <ScrollableDiv>
        <Name>{name}</Name>
        <ExtractsContainer>
          <ExtractsTitle>Status:</ExtractsTitle>
          <Extracts>{status}</Extracts>
        </ExtractsContainer>
        <ExtractsContainer>
          <ExtractsTitle>Species:</ExtractsTitle>
          <Extracts>{useDefaultIfUnknown(species, "Uncategorised")}</Extracts>
        </ExtractsContainer>
        <ExtractsContainer>
          <ExtractsTitle>Gender:</ExtractsTitle>
          <Extracts>{useDefaultIfUnknown(gender, "Uncategorised")}</Extracts>
        </ExtractsContainer>
        <ExtractsContainer>
          <ExtractsTitle>Origin:</ExtractsTitle>
          <Extracts>{useDefaultIfUnknown(origin.name, "-")}</Extracts>
        </ExtractsContainer>
        <ExtractsContainer>
          <ExtractsTitle>Location:</ExtractsTitle>
          <Extracts>{useDefaultIfUnknown(location.name, "-")}</Extracts>
        </ExtractsContainer>

        <ExtractsContainer>
          <Name>Episode{episodes.length > 1 ? "s" : ""}</Name>
        </ExtractsContainer>
        <EpisodeTable>
          <TableHeaderContainer>
            <TableHeaderTitle>Title</TableHeaderTitle>
            <TableHeaderOnAir>OnAir</TableHeaderOnAir>
            <TableHeaderNumber>#</TableHeaderNumber>
          </TableHeaderContainer>
          <EpisodeList>
            {episodes &&
              episodes.map((episode) => {
                return <Episode key={episode.id} {...episode} />;
              })}
          </EpisodeList>
        </EpisodeTable>

        <CharacterImage $path={image} />
        <Close onClick={props.onClick}>X</Close>
      </ScrollableDiv>
    </DetailsContainer>
  );
}
