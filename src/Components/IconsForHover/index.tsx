import { Container } from "./styles";
import notifyIcon from "../../assets/notify.png";
import chatIcon from "../../assets/chat.png";

const IconsForHover = () => {
    return <Container>
        <button><img src={notifyIcon} alt="" /></button>
        <button><img src={chatIcon} alt="" /></button>
    </Container>
}

export default IconsForHover;