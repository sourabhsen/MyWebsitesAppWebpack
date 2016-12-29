import {Component} from '@angular/core';
import {BlogService} from './blog.service';
import { ROUTER_DIRECTIVES } from '@angular/router';



@Component({
    template:require('./newblog.html'),
    providers:[BlogService]
})

export class NewBlogComponent{
    blogForm: any;
    postItem:Array<Object>;
    errorMessage: boolean = false;
    
    constructor(private blogService:BlogService){
      //  this.blogForm = {};
    }


   submitBlogForm(form:any) : void{
    console.log("component",form);   
    this.blogService.postBlogDetail(form).subscribe((response:any) => {
                
     });
    
   }
}