import { useSelector } from "react-redux";
import { Wrapper, Top, Img } from "./InfoComponents/InfoComponents";

const Info = () => {
    const summary = useSelector(state => state.geo.summary);
    
    return ( 
        <Wrapper>
            <Top>
            {/* че за хуета */}
                <Img src='./images/lite/front-end-skills_quasa_io.png' alt={summary}/>
            </Top>
        </Wrapper>
     );
}
export default Info;