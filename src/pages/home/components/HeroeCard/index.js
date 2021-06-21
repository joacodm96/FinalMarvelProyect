import React from "react";
import { StyledCard, StyledBodyCard, StyledFavoriteWrapper, StyledWrapper } from "./styled"
import EmptyStar from "../../../../images/empty-star.svg"
import FullyStar from "../../../../images/fully-star.svg"

export const HeroeCard = (props) => {

    return (
        <StyledWrapper >
            {!props.hideFavorites && (
                <StyledFavoriteWrapper onClick={props.onFavoriteClick}>
                    {props.isFavorite && (<img alt=" favorite character" src={FullyStar} />)}
                    {!props.isFavorite && (<img alt="select favorite character" src={EmptyStar} />)}
                </StyledFavoriteWrapper>
            )}
            <StyledCard onClick={() => {
                if (props.onClick) {
                    props.onClick()
                }
            }} backgroundImage={props.image}>

                <StyledBodyCard>
                    <p>
                        {props.name}
                    </p>
                </StyledBodyCard>

            </StyledCard>
        </StyledWrapper>
    )
}