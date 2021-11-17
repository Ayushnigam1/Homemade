import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Content from './components/Content';
import Recipes from './components/Recipes';
import Login from './components/Login';


function App() {
  // fetch("http://127.0.0.1:5000/hello").then((data)=>{console.log(data)});
  return (
    
    <>
    <Router>
    <Navbar/>
      <Switch>

          <Route exact path="/">
            <Content />
          </Route>
          <Route exact path="/home">
            <Content />
          </Route>
          <Route exact path="/recipes">
            <Recipes/>
          </Route>
          <Route exact path="/recipes">
            <Recipes/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
        </Switch>

 </Router>
    </>
  );
}

export default App;
