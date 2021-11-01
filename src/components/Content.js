import React from 'react';

function Content(params) {
    return(
        <>
        <div className="container">
 <div className="header">
 <div className="text">
 <div className="textdata">
 <h2>Cook Food Like Never Before</h2>
 <p>Create delicious recipes, become your own chef and spend a 
nice dinner with your family & friend. </p>

</div>
 </div>
 <div className="banner">
 <div className="bannerimage">
 </div>
 </div>
 </div>
 </div>

 {/* popular recipes */}
 <div className="container">
 <h2 className="subtitle">Popular Recipes</h2>
 </div>
 
 <div className="cardcontain">
<div className="card">
<div className="cardimg">
</div>
<div className="carddata"><h5>Sample Recipes</h5>
</div>
</div>
<div className="card">
<div className="cardimg">
</div>
<div className="carddata"><h5>Sample Recipes</h5>
</div>
</div>
<div className="card">
<div className="cardimg">
</div>
<div className="carddata"><h5>Sample Recipes</h5>
</div>
</div>
<div className="card">
<div className="cardimg">
</div>
<div className="carddata"><h5>Sample Recipes</h5>
</div>
</div>
<div className="card">
<div className="cardimg">
</div>
<div className="carddata"><h5>Sample Recipes</h5>
</div>
</div>
<div className="card">
<div className="cardimg">
</div>
<div className="carddata"><h5>Sample Recipes</h5>
</div>
</div>
 </div>
        </>
    )}
    export default Content;