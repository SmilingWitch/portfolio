import "./TextInCircle.css"
import {BsGithub,BsInstagram,BsTelegram} from "react-icons/bs"




function TextInCircle() {
    const icons = [/*<BsGithub/>, <BsInstagram/>,*/<BsGithub/>, <BsTelegram/>];
    const urls = ["https://github.com/SmilingWitch","https://instagram.com/smiling_witch99?igshid=OGY3MTU3OGY1Mw==","https://t.me/SmilingWitch99"]
    const len = icons.length;
    const deg = 90 / len;

    return (
        <div className="spinning-text-wrapper">
        <div className="spinning-text git">
          <div className="icon4">
            <span className="gitIcon"><BsGithub/></span>
          </div>
          </div>
          <div className="spinning-text tel">
          <div className="icon4">
            <span className="gitIcon"><BsTelegram/></span> 
          </div>
          </div>
        </div>

    );
}

export default TextInCircle ;