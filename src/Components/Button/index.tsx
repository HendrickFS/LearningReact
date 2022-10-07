import { Container } from "./styles";

const Button = () => {
    return <div>
                <Container btnType="primary">Página inicial</Container>
                <Container btnType="secondary">Hoje</Container>
                <Container btnType="secondary">Criar</Container>
            </div>;
}

export default Button;