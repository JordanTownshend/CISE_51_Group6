import React from "react";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
} from "react-router-dom";

import Home from "./pages/Home";
import SubmitArticle from "./pages/Submit-Article"; 
import ModerateArticle from "./pages/Moderation-Article"; 
import AnalyseArticle from "./pages/Analyse-Article"; 


import Search from "./components/Seacrh"

const App = () =>  {
    return (
        <Router>
        <div>
          <h1>Software Practice Empirical Evidence Database (SPEED)</h1>
          <h3> Search Articles by Title</h3>
        <Search></Search>
            <ul className="header">
                <li><NavLink exact to = "/">Home</NavLink></li>
                <li><NavLink to = "/SubmitArticle">Suggest an Article</NavLink></li>
                <li><NavLink to = "/ModerateArticle">Moderate an Article</NavLink></li>
                <li><NavLink to = "/AnalyseArticle">Analyse an Article</NavLink></li>
            </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route  path="/SubmitArticle" component={SubmitArticle}/>
            <Route  path="/ModerateArticle" component={ModerateArticle}/>
            <Route  path="/AnalyseArticle" component={AnalyseArticle}/>
          </div>
        </div>
        </Router>
    );
}
 
export default App;
