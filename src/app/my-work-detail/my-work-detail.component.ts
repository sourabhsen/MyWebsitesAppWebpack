import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
   template: `<h3>About Item Id: {{id}}</h3>`
})

export class MyWorkDetailComponent{
  id: any;
  paramsSub: any;

  constructor(private activatedRoute: ActivatedRoute) { 
     
  }

   ngOnInit() {
    let self = this; 
    this.paramsSub = this.activatedRoute.params.subscribe(function(params){
       self.id = params['id'];
       self.getProjectContent(self.id); 
    });
  }

  getProjectContent(projectId){
     console.log("fetch the project",projectId);
  } 
  
  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}