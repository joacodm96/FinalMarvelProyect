import React  from 'react'
import styled from "styled-components";

const StyledContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);


`
export const CardsContainer = ({children}) => {
    return ( 
        <StyledContainer>
            {children}
        </StyledContainer>
     );
}
 



