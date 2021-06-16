import styled from 'styled-components'

export const StyledComic = styled.div`
    display: flex;
    justify-content: center;
    padding: 12px;
    margin-top: 10vh;
    
    @media(max-width: 800px) {
        flex-direction: column;
        align-items: center;
    }
`
export const StyledComicImage = styled.img`
    max-width: 380px;
    @media(max-width: 800px) {
        max-width: 380px;
        width: 100%;
    }
`
export const StyledComicDescriptionContainer = styled.div`
    margin-left: 32px;
    width: 30vw;
    
    @media (max-width: 800px) {
        width: 70vw;
    }

    h1 {
        margin-top: 0px;
        color:white;
    }
    p {
        color:white;
    }
    
`