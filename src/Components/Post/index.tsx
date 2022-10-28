import { useState } from "react";
import { Container } from "./styles";
import RedButton from "../RedButton";
import IconsForHover from "../IconsForHover";

interface PostProps {
    img: string;
    desc?: string;
    user?: string;
    profile: string;
}

const Post = (props: PostProps) => {
    const [isHovered, setIsHovered] = useState(false);
    return <Container>
                <img
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    src={props.img} 
                    alt="" />
                {isHovered && <div id="hovered">
                        <RedButton/>
                        <a id="colection" href="" target="_blank">Colection</a>
                        <IconsForHover/>
                    </div>}
                <h3>{props.desc || "Sky at rainy day"}</h3>
                <div id="user">
                    <img id="profile"
                        src={props.profile}
                        alt="profilePic"/>
                    <h4>{props.user || "Hendrick"}</h4>
                </div>
          </Container>
}

export default Post;