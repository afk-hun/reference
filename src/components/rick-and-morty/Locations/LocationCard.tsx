import styled from "styled-components";
import { useDefaultIfUnknown } from "../../../utils/utilityFunctions";
import { useState, MouseEvent } from "react";
import { getDataByLink, getDatasByLinks } from "../../../api/rickAndMortyCalls";
import {
  Character,
  CharacterBox,
  CharacterContainer,
  CharacterName,
  Container,
  ItemContainer,
  ItemName,
  More,
} from "../Common/StyledElements";
import { CharacterType, LocationType } from "../Common/types";
import { LeftText, ListContainer } from "../Common/CardElements";

const LocationName = styled(ItemName)`
  font-weight: 300;
`;
const Dimension = styled(ItemName)`
  inline-size: 120px;
`;

export function LocationCard(props: LocationType) {
  const { name, type, dimension, residents } = props;

  const [residentsState, setResidentsState] = useState<CharacterType[] | null>(
    null
  );
  const [expand, setExpand] = useState<boolean>(false);

  async function residentClickHandler(event: MouseEvent<HTMLAnchorElement>) {
    try {
      const response = await getDatasByLinks(residents, getDataByLink);
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
          <LocationName>{useDefaultIfUnknown(type, "Undefined")}</LocationName>
        </LeftText>
        <ListContainer>
          <Dimension>{useDefaultIfUnknown(dimension, "Undefined")}</Dimension>
          <More onClick={residentClickHandler}>Residents</More>
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
}
