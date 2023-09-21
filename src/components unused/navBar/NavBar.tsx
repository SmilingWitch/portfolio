import { NavLink,  useNavigate } from "react-router-dom";
import "./Navbar.css";
import "./NavBar.css"
import { GoHome } from "react-icons/go";
import { RiContactsLine} from "react-icons/ri";
import { AiOutlineProject} from "react-icons/ai";
import { Link ,BrowserRouter as Router, Route} from "react-router-dom";

function NavBar() {

    return (
        <Router>
            <div className="bar">
            <div className="list1">
                <nav>
                <ul>
                    <li>
                        <Link to ="/"><div className="barIcon"> <GoHome/> </div></Link>
                    </li>
                    <li>
                        <Link to = "/about"><div className="barIcon"> <RiContactsLine/> </div></Link>
                    </li>
                    <li>
                        <Link to = "/projects"> <div className="barIcon"><AiOutlineProject/></div></Link>
                    </li>
                    
                </ul>   
                </nav> 
            </div>
        </div>    
        </Router>




    )
}

export default NavBar ;