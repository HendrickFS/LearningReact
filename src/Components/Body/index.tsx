import Row from "../Row";
import { Container } from "./styles";
// import Sky from "../../assets/sky.jpeg";
// import nightBus from "../../assets/nightBus.jpeg";
import imgArray from "../../services/getImagesForPosts";

interface postImgs {
    img: string;
    profile: string;
}

const imgObjects = imgArray

let numberPerColumn = Math.floor(imgObjects.length/5);
let cont = 0;
let keys = 0;
let rowImgs: Array<postImgs> = [];

const Body = () => {
    return <Container>
                {imgObjects.map((img) => {
                    if (cont === numberPerColumn) {
                        rowImgs=[];
                        cont = 0;
                    }
                    try{
                        rowImgs.push(img);
                        cont++;
                        keys++;
                    }catch{
                        console.log("error");
                    } 
                    if (rowImgs.length === numberPerColumn) {
                        return <Row imgs={rowImgs} key={keys}/>
                    }
                    return null;
                })}
            </Container>
}

export default Body;