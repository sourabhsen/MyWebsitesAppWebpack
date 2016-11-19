import {Component} from '@angular/core';
import {BlogService} from './blog.service';
import { ROUTER_DIRECTIVES } from '@angular/router';

import {window} from '@angular/platform-browser/src/facade/browser';



@Component({
    template:require('./blog.html'),
    providers:[BlogService],
     directives: [ROUTER_DIRECTIVES]
})

export class BlogComponent{
     items: Array<any>;
     postItem:Array<Object>;
     errorMessage: boolean = false;

    constructor(private blogService:BlogService){
        this.getBlog();
         window.$('body').removeClass('grid-loaded');
    }

    getBlog(){
       let self = this;
        this.blogService.getBlogList().subscribe(function(response:any){
            
               self.postItem = JSON.parse(response._body);
                window.$('body').addClass('grid-loaded');
              if(!self.postItem.length){
                  self.errorMessage = true;
               }
          });
    }

    incrementVote(blog:any){
         let self = this;
        this.blogService.getIncrementCount(blog).subscribe(function(response:any){
            
               self.postItem = JSON.parse(response._body);
              if(!self.postItem.length){
                  self.errorMessage = true;
               }
          });
    }

    decrementVote(blog:any){
        let self = this;
        this.blogService.getDecrementCount(blog).subscribe(function(response:any){
            
               self.postItem = JSON.parse(response._body);
              if(!self.postItem.length){
                  self.errorMessage = true;
               }
          });
    }
}