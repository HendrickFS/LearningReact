import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: left;
    img{
        border-radius: 1.5rem;
        width: 100%;
        height: auto;
    }
    h3{
        font-family: Arial;
        align-self: left;
        color: #363636;
        font-size: small;
        margin-left: 0.5rem;
    }
    #user{
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    #profile{
        height: 2.5rem;
        width: 2.5rem;
        border-radius: 50%;
        margin-left: 0.5rem;
    }
    h4{
        font-family: serif;
        color: #4F4F4F;
    }
    `