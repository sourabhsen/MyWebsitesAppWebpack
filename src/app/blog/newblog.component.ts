import {Component} from '@angular/core';
import {BlogService} from './blog.service';
import { ROUTER_DIRECTIVES } from '@angular/router';



@Component({
    //template:require('./newblog.html'),
    providers:[BlogService],
    directives: [ROUTER_DIRECTIVES],
     template : require('./newblog.html')
})

export class NewBlogComponent{
    items: Array<any>;
    postItem:Array<Object>;
    errorMessage: boolean = false;
    
    constructor(private blogService:BlogService){}

   submitBlogForm(form:any) : void{
    console.log("component",form);   
    
   }
}