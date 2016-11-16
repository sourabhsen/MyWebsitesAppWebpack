import {Component} from '@angular/core';
import {BlogService} from './blog.service';
import { ROUTER_DIRECTIVES } from '@angular/router';



@Component({
    //template:require('./newblog.html'),
    providers:[BlogService],
    directives: [ROUTER_DIRECTIVES],
     template : `
            <div class="jumbotron">
                <h2>Template Driven Form</h2>
                <!-- Here we are declaring a local variable called “form” and setting it to an instance of ngForm. This is very important. Now our local form variable becomes of type FormGroup allowing us access to the FormGroup API’s on this local variable. We use this in the ngSubmit event where we send the value of the form via form.value -->
                <form #form="ngForm" name="form" (ngSubmit)="submitBlogForm(form)">
                <div class="form-group">
                    <label>title:</label>
                    <!-- Since we are working with template driven forms, we can use the ngModel directive to capture the values of our forms. One thing to note if you are coming from Angular 1.x. Using ngModel as shown below creates a one-way data binding, so once we hit submit the data is only sent to the controller. If we wanted to use two-way data binding, we would have to wrap the ngModel in [()] and assign an attribute to it. Also the name of the field corresponds to the name attribute so our first input will be firstName. -->
                    <input type="text" class="form-control" placeholder="title" name="title" ngModel required>
                </div>
                <div class="form-group">
                    <label>short Desc</label>
                    <input type="text" class="form-control" placeholder="short description" name="sDesc" ngModel required>
                </div>
              
                <div class="form-group">
                    <button type="submit" class="btn btn-default">Submit</button>
                </div>
                </form>
            </div>
            `
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