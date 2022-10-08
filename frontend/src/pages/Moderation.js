import React from "react";
import ModerationForm from "../components/ModerationForm";
 
const Moderation = () =>  {
  return (
   <div>
     <h2>Moderate Article</h2>
         <p>This is the form to allow moderators to check an article for moderation in our SEED repo.</p>
         <ModerationForm/>
     </div>
 );
}

export default Moderation;

