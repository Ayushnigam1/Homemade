import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {
    return(
        <>
    <div className="container">
     <nav>
 <ul>
 <li className="brand"><Link to="/">Home<span>Made</span></Link></li>
 <li><Link to="/home">Home</Link></li>
 <li><Link to="/login" className="login">Login</Link></li>
 <li><Link to="/signUp" className="signup">SignUp</Link></li>
 </ul>
 </nav>
 </div>
 </>
    )}
 export default Navbar;