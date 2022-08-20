
import React from'react'
import "./style/style.css"
 import "./js/edit.js"

function App() {
  return (
    <div className="container">
  <div className="row align-items-center justify-content-center">
    <div className='quote'>
            <h2 id="element"><q >quote text</q ></h2>
            <p id="author" className="d-flex flex-row justify-content-end p-1">ayoub</p>
            <button type="button" className="btn btn getquote" id="buton"  >New Quote</button> 
            <a href="#" class="fa fa-twitter"></a>
            <a href="#" class="fa fa-tumblr"></a>

   </div>
            <footer>Developped By Ayoub Stifi</footer>

   </div>
   </div>
   
  );
}

export default App;
