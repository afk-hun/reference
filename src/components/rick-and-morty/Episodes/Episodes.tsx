import { useEffect, useState } from "react";
import styled from "styled-components";
import { getSeasons } from "../../../api/rickAndMortyCalls";
import { EpisodeType } from "../Common/types";
import EpisodeCard from "./EpisodeCard";
import {
  Content,
  MainSection,
  TableHeaderContainer,
  TableHeaderEmpty,
  TableHeaderSubtitle,
  TableHeaderTitle,
} from "../Common/StyledElements";
import { LeftText, ListContainer } from "../Common/CardElements";

const EpisodeSelector = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const SeasonText = styled.div`
  display: flex;
  padding-right: 1rem;
  font-weight: 600;
`;
const SeasonListItem = styled.li`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 2rem;
  height: 2rem;
`;
const SeasonListButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #887bb0;
  padding: 0.5rem;
  color: #fff4bd;
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  font-size: 1.2rem;

  &:focus {
    color: #887bb0;
    background: #fff4bd;
  }

  &:active {
    color: #887bb0;
    background: #fff4bd;
  }
`;

const TableHeaderHashtag = styled.h1`
  display: flex;
  padding-right: 1rem;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  font-weight: 600;
  min-width: 80px;
  font-size: 1rem;
`;

type SeasonType = {
  info: {
    count: number;
    next: string;
    pages: number;
    prev: string;
  };
  results: EpisodeType[];
};

export default function Episodes() {
  const [seasons, setSeasons] = useState<SeasonType[]>([]);
  const [activeSeason, setActiveSeason] = useState<number>(0);

  useEffect(() => {
    async function fetchData() {
      try {
        await getSeasons(async (data) => {
          const response = (await data) as SeasonType;
          setSeasons((prevState) => {
            const i = prevState.findIndex(
              (e) => e.results[0].name === response.results[0].name
            );
            if (i === -1) {
              return [...prevState, response];
            } else {
              return [...prevState];
            }
          });
        });
      } catch {}
    }
    fetchData();
  }, []);

  return (
    <MainSection>
      <Content>
        <EpisodeSelector>
          <SeasonText>Season</SeasonText>
          {seasons.map((season, index) => {
            return (
              <SeasonListItem key={index}>
                <SeasonListButton
                  type="button"
                  onClick={() => {
                    setActiveSeason(index);
                  }}
                >
                  {index + 1}
                </SeasonListButton>
              </SeasonListItem>
            );
          })}
        </EpisodeSelector>
        <TableHeaderContainer>
          <LeftText>
            <TableHeaderTitle>Name</TableHeaderTitle>
            <TableHeaderSubtitle>On Air</TableHeaderSubtitle>
          </LeftText>
          <ListContainer>
            <TableHeaderHashtag>#</TableHeaderHashtag>
            <TableHeaderEmpty />
          </ListContainer>
        </TableHeaderContainer>
        {seasons[activeSeason] !== undefined &&
          seasons[activeSeason].results.map((episode) => {
            return <EpisodeCard key={episode.id} {...episode} />;
          })}
      </Content>
    </MainSection>
  );
}
