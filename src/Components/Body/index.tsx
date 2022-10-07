import Row from "../Row";
import { Container } from "./styles";
import Sky from "../../assets/sky.jpeg";
import nightBus from "../../assets/nightBus.jpeg";

interface postImgs {
    img: string;
    profile: string;
}

const imgObjects = [{img: nightBus, profile: Sky}, {img: Sky, profile: nightBus}, {img: Sky, profile: nightBus}, {img: nightBus, profile: Sky}, {img: Sky, profile: nightBus}, {img: nightBus, profile: Sky}, {img: nightBus, profile: Sky}, {img: Sky, profile: nightBus}, {img: Sky, profile: Sky}, {img: Sky, profile: nightBus}, {img: Sky, profile: Sky}, {img: nightBus, profile: Sky}, {img: Sky, profile: nightBus}, {img: nightBus, profile: Sky}, {img: Sky, profile: nightBus}, {img: nightBus, profile: Sky}, {img: nightBus, profile: Sky}, {img: Sky, profile: nightBus}, {img: nightBus, profile: Sky}, {img: Sky, profile: nightBus}, {img: Sky, profile: Sky}, {img: nightBus, profile: Sky}, {img: Sky, profile: nightBus}, {img: nightBus, profile: Sky}, {img: Sky, profile: nightBus}];

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
                })}
            </Container>
}

export default Body;