import sytled from 'styled-components';

interface IButtonProps {
    btnType?: 'primary'|'secondary';
}

export const Container = sytled.button<IButtonProps>`
    background: ${props => props.btnType === 'primary' ? '#000' : "#FFF"};
    color: ${props => props.btnType === 'primary' ? '#FFF' : "#000"};
    border-radius: 2.5rem;
    height: 2.5rem;
    padding: 1rem;
    transition: all 0.2s ease-in-out;

    &:hover {
        opacity: 0.8;
    }
`
