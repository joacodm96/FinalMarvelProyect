import styled from 'styled-components'

export const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-column-gap: 16px; 
    grid-row-gap: 24px;
    padding: 12px;
    max-width: 1100px;
    width: 100%;
    margin: auto;
    box-sizing: border-box;
    margin-top: 10px;
    
    @media(max-width: 800px) {
        grid-template-columns: repeat(2,1fr);
        padding: 12px 24px;
    }
    @media(max-width: 500px) {
        grid-template-columns: 1fr;
        padding: 12px 32px;
    }
`

export const StyledTabsContainer = styled.div`
    max-width: 1100px;
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
   
`

export const StyledTabElement = styled.span`
	color: ${(props) => props.isActive ? "#ec242b" : "white"};
	margin: 12px;
	font-weight: bold;
	cursor: pointer;
    
`

export const HomePageComponent = styled.div`

    max-width: 1076px;
    width: 100%;
  
`

export const NotFoundComponent = styled.div`
color: white;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 50vh;
font-size: 24px;
`
