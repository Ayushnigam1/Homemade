import React from 'react';

function Content(params) {
    return (
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

        {/*category*/}

        <div className="container">
        <h2 className="subtitle">Popular category</h2>
        </div>
        
        <div className="categorycontain">
       <div className="cardcategory ">
       <div className="cardcategoryimg">
       </div>
       <div className="cardcategorydata"><h5>Category 1</h5>
       </div>
       </div>
       <div className="cardcategory ">
       <div className="cardcategoryimg">
       </div>
       <div className="cardcategorydata"><h5>category 2</h5>
       </div>
       </div>
       <div className="cardcategory ">
       <div className="cardcategoryimg">
       </div>
       <div className="cardcategorydata"><h5>category 3</h5>
       </div>
       </div>
       <div className="cardcategory ">
       <div className="cardcategoryimg">
       </div>
       <div className="cardcategorydata"><h5>category 4</h5>
       </div>
       </div>
       <div className="cardcategory ">
       <div className="cardcategoryimg">
       </div>
       <div className="cardcategorydata"><h5>category 5</h5>
       </div>
       </div>
       <div className="cardcategory ">
       <div className="cardcategoryimg">
       </div>
       <div className="cardcategorydata"><h5>category 6</h5>
       </div>
       </div>
        </div>


        <div className="container">
        <div className="header">
        <div className="Bottomtext">
        <div className="Bottomtextdata">
        <h3 className="Bottomhead">Sharing is Caring ..</h3>
        <p> Upload your recipes and share it with the world. </p>
       
       </div>
        </div>
        <div className="banner">
        <div className="Bottombannerimage">
        </div>
        </div>
        </div>
        </div>
        </>
    )
}
export default Content;