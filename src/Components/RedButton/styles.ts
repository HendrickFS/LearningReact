import sytled from 'styled-components';


export const Container = sytled.button`
    background: red;
    color: white;
    border-radius: 2.5rem;
    height: 2.5rem;
    padding: 0.8rem;
    padding-bottom: 0.8rem;
    transition: all 0.2s ease-in-out;
    position: absolute;
    top: 10px;
    left: 65%;
    font-family: arial;
    font-size: 15px;
    font-weight: bold;
    

    &:hover {
        opacity: 0.8;
    }
`
