import {Component} from '@angular/core';
import {BlogService} from './blog.service';
import { ROUTER_DIRECTIVES } from '@angular/router';

import {PagerService} from '../../service/pager.service';

import {window} from '@angular/platform-browser/src/facade/browser';



@Component({
    template:require('./blog.html'),
    providers:[BlogService,PagerService],
     directives: [ROUTER_DIRECTIVES]
})

export class BlogComponent{
     items: Array<any>;
     postItem:Array<Object>;
     errorMessage: boolean = false;
    
     // array of all items to be paged
     private allItems: any[];
 
     // pager object
     pager: any = {};
 
     // paged items
     pagedItems: any[];

    constructor(private blogService:BlogService,private pagerService: PagerService){
        this.getBlog();
         window.$('body').removeClass('grid-loaded');
    }

    getBlog(){
       let self = this;
        this.blogService.getBlogList().subscribe(function(response:any){
            
               self.postItem = JSON.parse(response._body);
               self.allItems = JSON.parse(response._body);
               // initialize to page 1
               self.setPage(1);
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

    setPage(page:number){
         if (page < 1 || page > this.pager.totalPages) {
            return;
        }
 
        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page);
 
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
}