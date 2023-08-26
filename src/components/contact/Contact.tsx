import TextInCircle from "../texInCircle/TextInCircle";
import  "./Contact.css";

function Contact() {
    return (
            <div className="MoonCont">
                <div className="header1 h">
                    Contact
                </div>
                <div className="moonBxSP">
                    <div className="moon1SP"  ></div>
                    <div className="moon2SP"  ></div>
                    <div className="moon3SP"> </div>
                    <img src='moon.svg' alt="" />
                    <div className="socialMedia">
                        <TextInCircle></TextInCircle> 
                    </div>
                </div>
            </div>
    );
}

export default Contact 