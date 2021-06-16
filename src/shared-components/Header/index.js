import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { StyledHeader, StyledFormContainer } from './styled'
import MarvelLogo from '../../images/marvel-logo.jpg'
import searchIcon from "../../images/search-icon.svg"
import { StyledInput } from '../../styles/GlobalLayout'
import {
    fetchRandomCharacters,
    searchCharactersAndComics,
} from '../../reducers/characters/charactersSlice'

export const Header = () => {
    const [term, setTerm] = useState("")
    const dispatch = useDispatch();
    const location = useLocation();

    const handleClickMarvelLogo = () => {
        dispatch(fetchRandomCharacters());
        setTerm(''); //clean the input
    }

    
    return (
        <StyledHeader>
            <Link to="/" onClick={() => handleClickMarvelLogo()}><img src={MarvelLogo} alt="marvel-logo" /></Link> {/* it returns to the home page when you click it */}

            {
                location.pathname === "/" && (
                    <StyledFormContainer onSubmit={(e) => {
                        e.preventDefault()
                        dispatch(searchCharactersAndComics({
                            character: term,
                            comic: term,
                        }))
                    }}>
                        <StyledInput placeholder="Search..." value={term} onChange={(e) => setTerm(e.target.value)} />
                        <button type="submit">
                            <img alt="search-icon" src={searchIcon} />
                        </button>
                    </StyledFormContainer>
                )
            }


        </StyledHeader >
    )
}