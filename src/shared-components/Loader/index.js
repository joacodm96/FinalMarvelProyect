import React from "react";
import LoarderLogo from '../../images/marvel-loader.png'
import { StyledLoader } from "./styled"

export const Loader = () => {
    return (
        <StyledLoader>
            <img   src={LoarderLogo} alt="loader-icon" />
        </StyledLoader>
    )
}