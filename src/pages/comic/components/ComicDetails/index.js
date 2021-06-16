import React from "react";
import { useSelector } from 'react-redux';
import { Loader } from "../../../../shared-components/Loader"
import { StyledComic, StyledComicImage, StyledComicDescriptionContainer } from "./styled"

export const ComicDetails = () => {
    const reducerState = useSelector((state) => state.comicDetails);
    const comicData = reducerState.comicData
    const onSaleDate = comicData && comicData.dates && comicData.dates.find((dateData) => dateData.type === "onsaleDate")

    return (
        <StyledComic>
            {reducerState.loading ? (
                <Loader />
            ) : (
                <>
                    <div>
                        {comicData && comicData.thumbnail && (
                            <StyledComicImage src={`${comicData.thumbnail.path}.${comicData.thumbnail.extension}`} />
                        )}
                    </div>
                    <StyledComicDescriptionContainer>
                        <h1>{comicData.title}</h1>
                        {onSaleDate && (
                            <p>
                                Published: {new Date(onSaleDate.date).toLocaleDateString()}
                            </p>
                        )}

                        {comicData && comicData.creators && (
                            <p>
                                Creators: {comicData.creators.items.map((creatorData) => creatorData.name).join(" ")}
                            </p>
                        )}

                        {comicData && comicData.description && (
                            <p>
                                Description: {comicData.description}
                            </p>
                        )}

                    </StyledComicDescriptionContainer>
                </>
            )}


        </StyledComic>
    )
}
