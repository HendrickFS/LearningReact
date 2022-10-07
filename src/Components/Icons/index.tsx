import { Container } from "./styles";
import { IconsContainer } from "./styles";
import logoImg from '../../assets/PinLogo.png';
import notify from '../../assets/notify.png';
import chat from '../../assets/chat.png';

const Icon = () => {
    return <IconsContainer>
                <Container><img src={notify} alt="notify" /></Container>
                <Container><img src={chat} alt="chat" /></Container>
                <Container><img src={logoImg} alt="profile" /></Container>
            </IconsContainer>
}

export default Icon;