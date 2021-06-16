import styled from "styled-components";

export const StyledLoader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000000cf;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        animation: breath-animation 3.5s infinite ease; 
    }
    
    /* breath circle animation */
    @keyframes breath-animation {
        0% { height: 50px; width: 50px; }
        30% { height: 300px; width: 300px; opacity: 1 }
        40% { height: 305px; width: 305px; opacity: 0.3; }
        100% { height: 50px; width: 50px; opacity: 0.6; }
       }
    }
`