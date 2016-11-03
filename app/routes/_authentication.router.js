
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

  // ### Authentication API Routes

  // Route to test if the user is logged in or not
  router.get('/auth/loggedIn', (req, res) => {

    // If the user is authenticated, return a user object
    // else return 0
    res.send(req.isAuthenticated() ? req.user : '0');
  });

  // Route to log a user in
  router.post('/auth/login', (req, res, next) => {

    // Call `authenticate()` from within the route handler, rather than
    // as a route middleware. This gives the callback access to the `req`
    // and `res` object through closure.

    // If authentication fails, `user` will be set to `false`. If an
    // exception occured, `err` will be set. `info` contains a message
    // set within the Local Passport strategy.
    passport.authenticate('local-login', (err, user, info) => {

      if (err)
        return next(err);

      // If no user is returned...
      if (!user) {

        // Set HTTP status code `401 Unauthorized`
        res.status(401);

        // Return the info message
        return next(info.loginMessage);
      }

      // Use login function exposed by Passport to establish a login
      // session
      req.login(user, (err) => {

        if (err)
          return next(err);

        // Set HTTP status code `200 OK`
        res.status(200);

        // Return the user object
        res.send(req.user);
      });

    }) (req, res, next);
  });

  router.post('/auth/signup', (req, res, next) => {

    // Call `authenticate()` from within the route handler, rather than
    // as a route middleware. This gives the callback access to the `req`
    // and `res` object through closure.

    // If authentication fails, `user` will be set to `false`. If an
    // exception occured, `err` will be set. `info` contains a message
    // set within the Local Passport strategy.
    passport.authenticate('local-signup', (err, user, info) => {

      if (err)
        return next(err);

      // If no user is returned...
      if (!user) {

        // Set HTTP status code `401 Unauthorized`
        res.status(401);

        // Return the info message
        return next(info.signupMessage);
      }

      // Set HTTP status code `204 No Content`
      res.sendStatus(204);

    }) (req, res, next);
  });

  // Route to log a user out
  router.post('/auth/logout', (req, res) => {

    req.logOut();

    // Even though the logout was successful, send the status code
    // `401` to be intercepted and reroute the user to the appropriate
    // page
    res.sendStatus(401);
  });

  // Route to get the current user
  // The `auth` middleware was passed in to this function from `routes.js`
  router.get('/auth/user', auth, (req, res) => {

    // Send response in JSON to allow disassembly of object by functions
    res.json(req.user);
  });

  // Route to delete a user. Accepts a url parameter in the form of a
  // username, user email, or mongoose object id.
  // The `admin` Express middleware was passed in from `routes.js`
  router.delete('/auth/delete/:uid', admin, (req, res) => {

    User.remove({

      // Model.find `$or` Mongoose condition
      $or : [

        { 'local.username' : req.params.uid },

        { 'local.email' : req.params.uid },

        { '_id' : ObjectId(req.params.uid) }
      ]
    }, (err) => {

      // If there are any errors, return them
      if (err)
        return next(err);

      // HTTP Status code `204 No Content`
      res.sendStatus(204);
    });
  });

   router.get('/linkedin', (req, res) => {

    // If the user is authenticated, return a user object
    // else return 0
    console.log('entered');
     
     var options = {
        url: 'https://api.linkedin.com/v1/people/~:(id,first-name,last-name,headline,picture-url,industry,summary,specialties,positions:(id,title,summary,start-date,end-date,is-current,company:(id,name,type,size,industry,ticker)),educations:(id,school-name,field-of-study,start-date,end-date,degree,activities,notes),associations,interests,num-recommenders,date-of-birth,publications:(id,title,publisher:(name),authors:(id,name),date,url,summary),patents:(id,title,summary,number,status:(id,name),office:(name),inventors:(id,name),date,url),languages:(id,language:(name),proficiency:(level,name)),skills:(id,skill:(name)),certifications:(id,name,authority:(name),number,start-date,end-date),courses:(id,name,number),recommendations-received:(id,recommendation-type,recommendation-text,recommender),honors-awards,three-current-positions,three-past-positions,volunteer)?oauth2_access_token=AQXlwglHTVGWAnV383iGjLhv6s3STgGAJ20U5Bg79UFJvQYaDo-CdJn8r2xZRWhjO6v2Uex3EXricCvA-MsVpTmHGtlocY1U8pRnS_WRKEtdfhcrpKP290aV014tcfUfdl6T43yMDBjhxNPpJnYbTw93HgmLQaiye_mwA4j6_3ScPnS553U&format=json',
        headers: {
          'User-Agent': 'request'
        }
      };
      
      function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
          var info = JSON.parse(body);
          
          var linked =  new linkedIn(info);
            console.log("length",linked);
            linked.save(function(err,result){
                  console.log('saves sucessfully');
                  console.log("result",result);
                  console.log("error",err);
              });
          
           res.json(info);
        }else{
           if(err){
             res.sendStatus(500);
           }
        }
      }
      
      request(options, callback);
      console.log("ending");
    
  });

};
