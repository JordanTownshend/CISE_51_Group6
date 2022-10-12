import React from "react";
import SubmissionForm from "../components/SubmissionForm";
import '../App.css';
import axios from 'axios';

import articles from "../dummydata/article.js";
import Styles from "../components/tablestyle.js";
import Table from "../components/Evidencetable.js";
import tablecolumns3 from "../components/tablecolumns3.js";



const AnalyseArticle = () =>  {
     return (
        <div>
        <h2>Select an article for analysing</h2>
               
               <Styles>
                 <Table
                  data={articles}
                  columns={tablecolumns3}
                 />
              </Styles>
      </div>
    );
}
 




export default AnalyseArticle;
