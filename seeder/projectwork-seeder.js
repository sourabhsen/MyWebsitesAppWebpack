var mongoose = require('mongoose');
var express = require('express');

var app =  express();

var projectwork =  require('../dist/server/models/projectWork.model');



//console.log(blog)

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/sourabhblog');



var projects = [ 
        new projectwork({
            title: 'Apollo university of phoenix',
            link:'Apollo',
            description: 'All of the free templates and themes on Start Bootstrap are now licensed under the MIT license instead of Apache 2.0.' + 
                  'The MIT license is simple, and it allows you to do just about anything you want with the templates.',
            images:['canvas','wireframe','1_1']      
        }),
        new projectwork({
            title: 'Paychex',
            link:'Paychex',
            description: 'All of the free templates and themes on Start Bootstrap are now licensed under the MIT license instead of Apache 2.0.' + 
                  'The MIT license is simple, and it allows you to do just about anything you want with the templates.',
            images:['canvas','wireframe','1_1'] ,
            created_at: "2017-08-10T17:53:55.433Z"
            
          }),
           new projectwork({
            title: 'Apolloedu',
            link:'Apolloedu',
            description: 'All of the free templates and themes on Start Bootstrap are now licensed under the MIT license instead of Apache 2.0.' + 
                  'The MIT license is simple, and it allows you to do just about anything you want with the templates.',
            images:['canvas','wireframe','1_1'] ,
            created_at: "2017-08-10T17:53:55.433Z"
            
          }),
           new projectwork({
            title: 'Carees',
            link:'Carees',
            description: 'All of the free templates and themes on Start Bootstrap are now licensed under the MIT license instead of Apache 2.0.' + 
                  'The MIT license is simple, and it allows you to do just about anything you want with the templates.',
            images:['canvas','wireframe','1_1'] ,
            created_at: "2017-08-10T17:53:55.433Z"
            
          }),
           new projectwork({
            title: 'Phoenix',
            link:'Phoenix',
            description: 'All of the free templates and themes on Start Bootstrap are now licensed under the MIT license instead of Apache 2.0.' + 
                  'The MIT license is simple, and it allows you to do just about anything you want with the templates.',
            images:['canvas','wireframe','1_1'] ,
            created_at: "2017-08-10T17:53:55.433Z"
            
          }),
           new projectwork({
            title: 'West',
            link:'West',
            description: 'All of the free templates and themes on Start Bootstrap are now licensed under the MIT license instead of Apache 2.0.' + 
                  'The MIT license is simple, and it allows you to do just about anything you want with the templates.',
            images:['canvas','wireframe','1_1'] ,
            created_at: "2017-08-10T17:53:55.433Z"
            
          }),
           new projectwork({
            title: 'AEM',
            link:'AEM',
            description: 'All of the free templates and themes on Start Bootstrap are now licensed under the MIT license instead of Apache 2.0.' + 
                  'The MIT license is simple, and it allows you to do just about anything you want with the templates.',
            images:['canvas','wireframe','1_1'] ,
            created_at: "2017-08-10T17:53:55.433Z"
            
          }),
           new projectwork({
            title: 'BWE',
            link:'BWE',
            description: 'All of the free templates and themes on Start Bootstrap are now licensed under the MIT license instead of Apache 2.0.' + 
                  'The MIT license is simple, and it allows you to do just about anything you want with the templates.',
            images:['canvas','wireframe','1_1'] ,
            created_at: "2017-08-10T17:53:55.433Z"
            
          }),
           new projectwork({
            title: 'MC',
            link:'MC',
            description: 'All of the free templates and themes on Start Bootstrap are now licensed under the MIT license instead of Apache 2.0.' + 
                  'The MIT license is simple, and it allows you to do just about anything you want with the templates.',
            images:['canvas','wireframe','1_1'] ,
            created_at: "2017-08-10T17:53:55.433Z"
            
          }),
           new projectwork({
            title: 'Social',
            link:'Social',
            description: 'All of the free templates and themes on Start Bootstrap are now licensed under the MIT license instead of Apache 2.0.' + 
                  'The MIT license is simple, and it allows you to do just about anything you want with the templates.',
            images:['canvas','wireframe','1_1'] ,
            created_at: "2017-08-10T17:53:55.433Z"
            
          })
        ]
    
  var count = 0;
  for(var i = 0;i<projects.length;i++){
      projects[i].save(function(err,result){
           console.log('saves sucessfully');
           console.log(result);

      });
     
    
  } 
