import "./MainButton.css"
import {AiOutlineArrowRight} from "react-icons/ai"
import { BsStarFill } from 'react-icons/bs'

function MainButton(props:{ info: string }) {
    return (
        <div className="mBtn">
            {props.info}
            <span>
                <div className="starIcon">
                    <BsStarFill></BsStarFill>
                </div>    
            </span>
        </div>
    );
}

export default MainButton ;