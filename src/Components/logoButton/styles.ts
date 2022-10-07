import styled from 'styled-components';

export const Container = styled.button`
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #e9e9e9;
    }

    img{
        height: 1.4rem;
        width: 1.4rem;
    }
`