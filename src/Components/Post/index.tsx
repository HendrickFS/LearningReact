import { Container } from "./styles";

interface PostProps {
    img: string;
    desc?: string;
    user?: string;
    profile: string;
}

const Post = (props: PostProps) => {
    return <Container>
                <img src={props.img} alt="" />
                <h3>{props.desc || "Sky at rainy day"}</h3>
                <div id="user">
                    <img id="profile" src={props.profile} alt="profilePic" />
                    <h4>{props.user || "Hendrick"}</h4>
                </div>
          </Container>
}

export default Post;