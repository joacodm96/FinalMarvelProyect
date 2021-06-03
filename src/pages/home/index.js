import React from "react"
import { StyledHeader } from "./styled"
import MarvelLogo from "../../images/marvel-logo.jpg"
import { StyledInput } from "../../styles/StyledInput"

export const Home = () => {
    return (
        <div>
            <StyledHeader>
                <img src={MarvelLogo} />
                <StyledInput placeholder="SEARCH" />
            </StyledHeader>
            

        </div>
    )
}