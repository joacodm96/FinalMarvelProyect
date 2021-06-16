import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { ComicDetails } from "../comic/components/ComicDetails";
import {
    fetchComicDetails
  } from '../../reducers/comicDetails/comicDetailsSlice';

import { useParams } from "react-router-dom";

//Comic-detail view render
//Dispatched by id
export const ComicPage = () => {
    const dispatch = useDispatch();
    const { comicId } = useParams();

    useEffect(() => {
        dispatch(fetchComicDetails(comicId))
    }, [dispatch, comicId])

    return (
        <div>
            <ComicDetails></ComicDetails>
        </div>
    )
}