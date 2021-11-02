import React from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';


function App() {
  fetch("http://127.0.0.1:5000/hello").then((data)=>{console.log(data)});
  return (
    
    <>
    <Navbar/>
 <Content/>
    </>
  );
}

export default App;
