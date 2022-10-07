import Post from "../Post";
import { Container } from "./styles";

interface postImgs {
    img: string;
    profile: string;
}

interface RowProps {
    imgs: Array<postImgs>;
}

const Row = (props: RowProps) => {
        return <Container>
                {props.imgs.map((post) => {
                    return <Post img={post.img} profile={post.profile}/>
                })}
            </Container>
}

export default Row;