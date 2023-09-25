import "./TextInCircle.css"
import {BsGithub,BsTelegram} from "react-icons/bs"




function TextInCircle() {

    return (
        <div className="spinning-text-wrapper">
        <div className="spinning-text git">
          <div className="icon4">
            <span className="gitIcon"><a href="https://github.com/SmilingWitch"><BsGithub/></a> </span>
          </div>
          </div>
          <div className="spinning-text tel">
          <div className="icon4">
            <span className="gitIcon"><a href="https://t.me/SmilingWitch99"><BsTelegram/></a></span> 
          </div>
          </div>
        </div>

    );
}

export default TextInCircle ;