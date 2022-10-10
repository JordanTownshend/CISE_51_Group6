import React from "react";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
} from "react-router-dom";

import Home from "./pages/Home";
import SubmitArticle from "./pages/Submit-Article"; 

const App = () =>  {
    return (
        <Router>
        <div>
          <h1>Software Engineering Empirical Evidence Database (SEED)</h1>
            <ul className="header">
                <li><NavLink exact to = "/">Home</NavLink></li>
                <li><NavLink to = "/SubmitArticle">Suggest an Article</NavLink></li>
            </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route  path="/SubmitArticle" component={SubmitArticle}/>
          </div>
        </div>
        </Router>
    );
}
 
export default App;
