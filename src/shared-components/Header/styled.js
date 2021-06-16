import styled from 'styled-components'

export const StyledHeader = styled.header`
  background: white;
  padding: 8px;
  box-shadow: 0px 0px 3px 0px #353535;
  display: flex;
  align-items: center;
  
  
  a {
    > img { 
      height: 48px;
      margin-right: 12px
    }
  }
  input {
    width: 100%;
  }
`

export const StyledFormContainer = styled.form`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 450px;
  
  img {
    width: 18px;
  }
  button {
    padding: 0 12px;
    background: white;
    border: 1px solid #ccc;
    border-left: 0;
    border-radius: 0px 6px 6px 0px;
    cursor: pointer;
  }
`