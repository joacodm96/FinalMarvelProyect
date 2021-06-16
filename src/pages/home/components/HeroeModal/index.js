import React from "react";
import { Link } from "react-router-dom";
import {
    StyledModalOverlay,
    StyledModal,
    StyledModalHeader,
    StyledModalBody,
    StyledDescription
} from "./StyledModal"
import CloseImage from "../../../../images/close.svg"

export const HeroeModal = (props) => {
    return (
        <StyledModalOverlay>
            <StyledModal>
                <StyledModalHeader>
                    <div>
                        {props.heroeData.name}
                    </div>
                    <img alt="close icon" onClick={props.onClose} src={CloseImage} />
                </StyledModalHeader>
                <StyledModalBody>
                    {props.heroeData && props.heroeData.comicsList && props.heroeData.comicsList.map((comic) => {
                        return (
                            <Link key={comic.id} to={`/comic/${comic.id}`}>
                                <div>
                                    <div>
                                        <img alt="comic icon" src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} />
                                    </div>
                                    <div>
                                        {comic.title}
                                        <StyledDescription>
                                            {comic.description || "There is no description"}
                                        </StyledDescription>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                    }

                </StyledModalBody>
            </StyledModal>
        </StyledModalOverlay>
    )
}