import "./MainButton.css"
import {AiOutlineArrowRight} from "react-icons/ai"
import { BsStarFill } from 'react-icons/bs'

function MainButton() {
    return (
        <div className="mBtn">
            Meet me
            <span>
                <div className="starIcon">
                    <BsStarFill></BsStarFill>
                </div>    
            </span>
        </div>
    );
}

export default MainButton ;