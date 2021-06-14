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
        width: 60px;
        animation: flash 1.5s infinite ease; 
    }
    @keyframes flash {
        0% { opacity: 0 }
        50% { opacity: 1 }
        100% { opacity: 0 }
    }
`