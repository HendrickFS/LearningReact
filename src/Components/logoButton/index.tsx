import { Container } from "./styles";
import logoImg from '../../assets/PinLogo.png';


const logoButton = () => {
  return (
      <Container>
          <img src={logoImg} alt="logo" />
      </Container>
  );
}

export default logoButton;