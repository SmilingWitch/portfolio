import Moon from "../moon/Moon";
import TextInCircle from "../texInCircle/TextInCircle";
import  "./Contact.css";

function Contact() {
    return (
            <div className="MoonCont">
                <div className="header1 h">
                    Contact
                </div>
                    <div className="contactHeader">
                        Let’s Build Something Together
                    </div>
                    <div className="socialMedia1">
                        <div className="email" onClick={() => window.open("mailto:danielitayero@gmail.com")}>
                        <a href="mailto:danielitayero@gmail.com"  >danielitayero@gmail.com</a>
                        </div>
                    </div>
            
                <div className="moonBxSP">
                <Moon moonSize= {180} light1= {140} light2 = {100} iconsize = {145}/>
                    <div className="socialMedia">
                        <TextInCircle></TextInCircle> 
                    </div>
                </div>
            </div>



    );
}

export default Contact 