import styled from "styled-components";

export const StyledCard = styled.div`
height: 300px;
padding: 1em;
margin: 45px 10px 10px;
text-align: center;
border-radius: 3px;
box-shadow: 2px 2px 2px 1px rgba(0,0,0,0.2);
background-size: cover;
background-position: center;
background: white;


`
export const StyledCardHeader = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 180px;
`
export const StyledCardBody = styled.div`
    /* aca meter chicha para que quede lindo*/
  padding: 16px 10px 17px; 
  
`