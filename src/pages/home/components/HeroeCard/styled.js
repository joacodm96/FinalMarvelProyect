import styled from "styled-components";





export const StyledBodyCard = styled.div`
  position: relative;
  overflow: hidden;
  padding: 16px 10px 17px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  height: 60px;
  z-index: 30;
  

  p {
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 1px;
    margin-top: 0;
    text-decoration: none;
    text-align: center;
  }
 
`

export const StyledCard = styled.div`
  cursor: pointer;
  border-radius: 5px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 350px;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
  min-width: 250px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-5px);
  
}
  `
