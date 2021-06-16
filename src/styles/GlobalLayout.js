import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalLayout= createGlobalStyle`
  body {
    font-family: 'Baloo Tammudu 2', cursive;
    /* font-family: 'Roboto', sans-serif; */
  }
  a {
    text-decoration: none;
  }
`

export const StyledInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px 0px 0px 6px;
  `