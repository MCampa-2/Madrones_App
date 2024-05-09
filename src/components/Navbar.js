import { Link } from "react-router-dom";


function Navbar(){
    return(
       <nav className="navbar">
       <Link className="results" to="/results">Quiz Results</Link>
        <Link className="signin" to="/signin">Sign In</Link>
       </nav>
    )
};

export default Navbar;