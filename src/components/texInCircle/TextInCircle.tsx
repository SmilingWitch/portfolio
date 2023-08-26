import "./TextInCircle.css"
import {BsGithub,BsInstagram,BsTelegram} from "react-icons/bs"




function TextInCircle() {
    const icons = [<BsGithub/>, <BsInstagram/>, <BsTelegram/>];
    const urls = ["https://github.com/SmilingWitch","https://instagram.com/smiling_witch99?igshid=OGY3MTU3OGY1Mw==","https://t.me/SmilingWitch99"]
    const len = icons.length;
    const deg = 90 / len;

    return (
        <div className="spinning-text-wrapper">
        <div className="spinning-text">
          <div className="icon4">
            { icons.map(( icon, i: number) => (
              <span
                key={i}
                style={{
                  transform: `rotate(${deg * i}deg)`,
                }}
              >
                <a href= {urls[i]}>{icon}</a>
              </span>
            ))}
          </div>

          </div>
        </div>

    );
}

export default TextInCircle ;