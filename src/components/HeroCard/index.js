import React from "react"
import { StyledCard } from "./StyledCard"

export const HeroeCard = () => {
    return(
        <StyledCard>
            {props.name}
        </StyledCard>
    )
}