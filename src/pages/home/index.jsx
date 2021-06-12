import React, { useEffect, useState } from "react";
import { StyledHeader } from "./styled";
import MarvelLogo from "../../images/marvel-logo.jpg";
import { StyledInput } from "../../styles/StyledInput";
import { StyledCard } from "../../components/HeroCard/StyledCard";
import { CardsContainer } from "../../components/CardsContainer/CardsContainer";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCharacters, getRandomCharacters
} from '../../reducers/characters/charactersSlice';
const randomNumber = 10;

export const StyledHeroName = styled.div`
  color: #000000;
  text-align: flex-start; //al inicio osea a la derecha
  display: flex;
`;

export const Home = () => {
  const reducerState = useSelector(selectCharacters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRandomCharacters())
  }, [])

  console.log("Desde el componente", reducerState)

  return (
    <div>
      <StyledHeader>
        <img src={MarvelLogo} />
        <StyledInput placeholder="SEARCH" />
      </StyledHeader>
      {reducerState.loading ? (
        'Loading...'
      ) : (
        <CardsContainer>
          {reducerState.charactersList?.map((character) => {
            return (
              <StyledCard key={character.id} onClick={() => {
                console.log('Dispatchear getSingleCharacter')
              }}>
                <img
                  src={character.thumbnail.path + "/portrait_xlarge.jpg"}
                  alt={character.name}
                />
                <div>Estrella</div>
                <StyledHeroName>{character.name}</StyledHeroName>
              </StyledCard>
            );
          })}
        </CardsContainer> 
      )}
    </div>
  );
};
