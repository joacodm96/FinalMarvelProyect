import React, { useEffect, useState } from "react";
import { HeroeCard } from "./components/HeroeCard"
import { HeroeModal } from "./components/HeroeModal"
import { StyledContainer, StyledTabElement, StyledTabsContainer, NotFoundComponent, HomePageComponent } from "./styled"
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { Loader } from "../../shared-components/Loader"
import {
  fetchRandomCharacters,
  searchCharactersAndComics,
  fetchCharacterComics,
  updateFavoriteList,
} from '../../reducers/characters/charactersSlice';



export const HomePage = (props) => {
  const [activeView, setActiveView] = useState("characters")
  const [openModal, setOpenModal] = useState(false)
  const reducerState = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    if (params.character || params.comic) {
      dispatch(searchCharactersAndComics({
        character: params.character,
        comic: params.comic
      }))
    } else {
      dispatch(fetchRandomCharacters())
    }
  }, [dispatch])




  return (
    <HomePageComponent  >
      {!reducerState.loading && (
        <StyledTabsContainer>
          <StyledTabElement
            onClick={() => setActiveView("characters")}
            isActive={activeView === "characters"}
          >
            CHARACTERS ({reducerState.charactersList.length})
          </StyledTabElement>

          <StyledTabElement
            onClick={() => setActiveView("comics")}
            isActive={activeView === "comics"}
          >
            COMICS ({reducerState.comicsList.length})
          </StyledTabElement>

          <StyledTabElement
            onClick={() => setActiveView("favorites")}
            isActive={activeView === "favorites"}
          >
            FAVORITES ({reducerState.favoritesCharacters.length})
          </StyledTabElement>
        </StyledTabsContainer>
      )}
      <StyledContainer>
        {reducerState.loading && (
          <Loader />
        )}

        {/* Inside character view: name/image and the onClick to dispatch character's comics on a Modal and to dispatch favorites  */}
        {activeView === "characters" && (
          reducerState.charactersList.map((character) => {
            return (
              <HeroeCard
                key={character.id}
                name={character.name}
                image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                isFavorite={reducerState.favoritesCharacters.some((favCharacter) => favCharacter.id === character.id)}
                onFavoriteClick={() => {
                  dispatch(updateFavoriteList(character))
                }}
                onClick={() => {
                  dispatch(fetchCharacterComics(character))
                  setOpenModal(true)
                }}
              />
            )
          })
        )}


        {/* Inside comic view: name/title/image */}
        {activeView === "comics" && (
          reducerState.comicsList.map((comic) => {
            return (
              <Link to={`/comic/${comic.id}`}>
                <HeroeCard
                  key={comic.id}
                  name={comic.title}
                  image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  hideFavorites
                />
              </Link>
            )
          })
        )}
        {/* Inside favorite list view */}
        {activeView === "favorites" && (
          reducerState.favoritesCharacters.map((character, index) => {
            return (
              <HeroeCard
                key={index}
                name={character.name}
                image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                isFavorite={reducerState.favoritesCharacters.some((favCharacter) => favCharacter.id === character.id)}
                onFavoriteClick={() => {
                  dispatch(updateFavoriteList(character))
                }}
                onClick={() => {
                  dispatch(fetchCharacterComics(character))
                  setOpenModal(true)
                }}
              />
            )
          })
        )}

      </StyledContainer>

      {/* "Not results found" its landed when the array is empty. //Loader off// */}
      {
        !reducerState.loading && !reducerState.charactersList.length &&
        <NotFoundComponent >
          Not results found
        </NotFoundComponent>
      }

      {openModal && (
        <HeroeModal
          heroeData={reducerState.selectedCharacter}
          onClose={() => {
            setOpenModal(false)
          }}
        />
      )}
    </HomePageComponent>
  )
}