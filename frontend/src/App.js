import React , { useState } from "react";
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


 // React States
 const [errorMessages, setErrorMessages] = useState({});
 const [isSubmitted, setIsSubmitted] = useState(false);

 // User Login info
 const database = [
   {
     username: "user1",
     password: "pass1"
   },
   {
     username: "user2",
     password: "pass2"
   }
 ];

 const errors = {
   uname: "invalid username",
   pass: "invalid password"
 };

 const handleSubmit = (event) => {
   //Prevent page reload
   event.preventDefault();

   var { uname, pass } = document.forms[0];

   // Find user login info
   const userData = database.find((user) => user.username === uname.value);

   // Compare user info
   if (userData) {
     if (userData.password !== pass.value) {
       // Invalid password
       setErrorMessages({ name: "pass", message: errors.pass });
     } else {
       setIsSubmitted(true);
     }
   } else {
     // Username not found
     setErrorMessages({ name: "uname", message: errors.uname });
   }
 };

 // Generate JSX code for error message
 const renderErrorMessage = (name) =>
   name === errorMessages.name && (
     <div className="error">{errorMessages.message}</div>
   );

 // JSX code for login form
 const renderForm = (
   <div className="form">
     <form onSubmit={handleSubmit}>
       <div className="input-container">
         <label>Username </label>
         <input type="text" name="uname" required />
         {renderErrorMessage("uname")}
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="pass" required />
         {renderErrorMessage("pass")}
       </div>
       <div className="button-container">
         <input type="submit" />
       </div>
     </form>
   </div>
 );

 return (
   <div className="app">
     <div className="login-form">
       <div className="title"></div>
       {isSubmitted ? <div>    
        <Router>
        <div>
          <h1>Software Practice Empirical Evidence Database (SPEED)</h1>
          <h3> Administrator logged in</h3>
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
      </div> : renderForm}
     </div>
   </div>
 );




  

}
 
export default App;
