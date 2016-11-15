import {Component} from '@angular/core';
import {BlogService} from './blog.service';
import { ROUTER_DIRECTIVES } from '@angular/router';



@Component({
    template:require('./newblog.html'),
    providers:[BlogService],
    directives: [ROUTER_DIRECTIVES]
})

export class NewBlogComponent{
    items: Array<any>;
    postItem:Array<Object>;
    errorMessage: boolean = false;
   
     
     constructor(private blogService:BlogService){
    
     }

   submitBlogForm(data:any){
    console.log(data);   
    let self = this;
    this.blogService.putBlogDetail(data).subscribe(function(response:any){
            self.postItem = JSON.parse(response._body);
            if(!self.postItem.length){
                self.errorMessage = true;
            }
        });
   }
}