import Button from "../Button";
import Icon from "../Icons";
import LogoButton from "../logoButton";
import SearchBar from "../SearchBar";
import { Container } from "./styles";

const navBar = () => {
    return (
        <Container>
            <LogoButton/>
            <Button/>
            <SearchBar/>
            <Icon/> 
        </Container>
    );
}

export default navBar;