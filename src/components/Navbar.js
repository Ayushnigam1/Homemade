import React from 'react';

function Navbar() {
    return(
        <>
    <div className="container">
     <nav>
 <ul>
 <li className="brand">Home<span>Made</span></li>
 <li><a href="/">Home</a></li>
 <li><a href="/">Recipes</a></li>
 <li><a href="/">credits</a></li>
 <li><a href="/" className="login">Login</a></li>
 </ul>
 </nav>
 </div>
 </>
    )}
    export default Navbar;