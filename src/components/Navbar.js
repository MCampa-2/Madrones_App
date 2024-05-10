import { Link } from "react-router-dom";
import madronesDoor from "../images/madronesDoor.jpg";


function Navbar(){
    return(
       <nav className="navbar">
       <div className="image-container">
        <img className="madrones-door" src={madronesDoor} alt="madrones-door"></img>
       </div>
       <Link className="results" to="/results">Quiz Results</Link>
        <Link className="signin" to="/signin">Sign In</Link>
       </nav>
    )
};

export default Navbar;