import styled from 'styled-components'

export const StyledModalOverlay = styled.div`  
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000000d1;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 35;
`
export const StyledModal = styled.div`
    max-width: 437px;
    width: 100%;
    height: 500px;
    border-radius: 8px;
    background: white;
    box-shadow: 0px 0px 3px 3px #212121;
    display: flex;
    flex-direction: column;
`

export const StyledModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px;
    font-size: 22px;
    border-bottom: 1px solid #ccc;
    
    img {
        width: 12px;
        cursor: pointer;
    }
`

export const StyledModalBody = styled.div`
    overflow: auto;
    a {
        color: black;
        > div {
            display: flex;
            padding: 8px;
            font-size: 19px;
            transition: .2s ease all;
    
           img {
               margin-right: 8px;
               width: 146px;
           }
           &:hover {
               opacity: .5;
           }
        }
    }
    
`

export const StyledDescription = styled.div`
    font-size: 12px;
    padding-top: 8px;
    margin-top: 8px;
    border-top: 1px solid #ccc;
`