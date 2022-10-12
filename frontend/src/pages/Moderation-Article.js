import React from "react";
import SubmissionForm from "../components/SubmissionForm";
import '../App.css';
import axios from 'axios';

import articles from "../dummydata/article.js";
import Styles from "../components/tablestyle.js";
import Table from "../components/Evidencetable.js";
import tablecolumns2 from "../components/tablecolumns2.js";



const ModerationArticle = () =>  {
     return (
        <div>
        <h2>Select an article for moderation</h2>
               
               <Styles>
                 <Table
                  data={articles}
                  columns={tablecolumns2}
                 />
              </Styles>
      </div>
    );
}
 




export default ModerationArticle;
