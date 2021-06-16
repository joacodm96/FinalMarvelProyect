import React from "react";
import {StyledCard, StyledBodyCard} from "./styled"

export const HeroeCard = (props) => {
    return (
        <StyledCard onClick={() => {
            if(props.onClick) {
                props.onClick()
            }
        }} backgroundImage={props.image}>
        
                
            <StyledBodyCard>
                <p>
                    {props.name}
                </p>
            </StyledBodyCard>
        
        </StyledCard>
    )
}