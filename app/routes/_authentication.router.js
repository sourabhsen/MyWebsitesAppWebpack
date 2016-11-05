
// */app/routes/_authentication.router.js*

// GET    */api/auth/user*        Get user data from session object in
//                                Node

// GET    */api/auth/loggedin*    Route to test if the user is logged in
//                                or not

// POST   */api/auth/login*       Route to login

// POST   */api/auth/logout*      Route to logout and redirect to the
//                                appropriate view

// ## Authentication API object

// Load user model
import User from '../models/user.model.js';

import linkedIn from '../models/Linkedin/linkedin.model.js';

let stringify = require("json-stringify-safe");

let https = require("https");
let HttpsProxyAgent = require('https-proxy-agent');  
let  request = require('request');  
let proxy = 'http://localhost:3030/';  
let agent = new HttpsProxyAgent(proxy); 


// Load the Mongoose ObjectId function to cast string as
// ObjectId
let ObjectId = require('mongoose').Types.ObjectId;

export default (app, router, passport, auth, admin) => {

router.get('/getlinkedIn',(req, res) =>{

     var options = {
        url: 'https://api.linkedin.com/v1/people/~:(id,first-name,last-name,emailAddress,headline,picture-url,industry,summary,specialties,positions:(id,title,summary,start-date,end-date,is-current,company:(id,name,type,size,industry,ticker)),educations:(id,school-name,field-of-study,start-date,end-date,degree,activities,notes),associations,interests,num-recommenders,date-of-birth,publications:(id,title,publisher:(name),authors:(id,name),date,url,summary),patents:(id,title,summary,number,status:(id,name),office:(name),inventors:(id,name),date,url),languages:(id,language:(name),proficiency:(level,name)),skills:(id,skill:(name)),certifications:(id,name,authority:(name),number,start-date,end-date),courses:(id,name,number),recommendations-received:(id,recommendation-type,recommendation-text,recommender:(picture-url,headline)),honors-awards,three-current-positions,three-past-positions,volunteer)?oauth2_access_token=AQXlwglHTVGWAnV383iGjLhv6s3STgGAJ20U5Bg79UFJvQYaDo-CdJn8r2xZRWhjO6v2Uex3EXricCvA-MsVpTmHGtlocY1U8pRnS_WRKEtdfhcrpKP290aV014tcfUfdl6T43yMDBjhxNPpJnYbTw93HgmLQaiye_mwA4j6_3ScPnS553U&format=json',
        headers: {
          'User-Agent': 'request'
        }
      };
      
      function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
          let info = JSON.parse(body);
          
          let linked =  new linkedIn(info);
            console.log("length",linked);
            linked.save(function(err,result){
                  console.log('saves sucessfully');
                  console.log("result",result);
                  console.log("error",err);
              });
           res.sendStatus(200);
        }else{
           if(error){
             res.sendStatus(500);
           }
        }
      }
      
      
      request(options, callback);
      console.log("ending");

})

router.get('/linkedin', (req, res) => {
     // Use mongoose to get all blog items in the database
      linkedIn.find((err, response) => {
        console.log('result'+ response);
        if(err)
          res.send(err);
        else
          res.json(response[response.length - 1]);
      });
  });

};
