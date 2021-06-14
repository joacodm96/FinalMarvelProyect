import React from "react";
import LoarderLogo from '../../images/marvel-loarder.png'
import { StyledLoader } from "./styled"

export const Loader = () => {
    return (
        <StyledLoader>
            <img alt="loader-icon" src={LoarderLogo} />
        </StyledLoader>
    )
}