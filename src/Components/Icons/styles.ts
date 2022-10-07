import styled from "styled-components";

export const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1.5rem;
`

export const Container = styled.button`
    border-radius: 2.5rem;
    height: 2.5rem;
    width: 2.5rem;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in-out;
 
    img{    
        height: 1.4rem;
        width: 1.4rem;
    }
    &:hover {
        background-color: #e9e9e9;
    }
`