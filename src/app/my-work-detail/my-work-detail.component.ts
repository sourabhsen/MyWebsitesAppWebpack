import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FeedComponent} from '../feed/feed.component';
import {MyWorkService} from '../my-work/my-work.service';


@Component({
   template:require('./my-work-detail.html'),
   providers:[MyWorkService],
   directives:[FeedComponent]
})

export class MyWorkDetailComponent{
  title: any;
  paramsSub: any;
  content:any;
  errorMessage:boolean;
  projectImageGallery:Array<string>;

  constructor(private activatedRoute: ActivatedRoute,private workService:MyWorkService) { 
     
  }

   ngOnInit() {
    let self = this; 
    this.paramsSub = this.activatedRoute.params.subscribe(function(params){
       self.title = params['title'];
       self.getProjectContent(self.title); 
    });
  }

  getProjectContent(projectTitle){   
      let self = this;
      let imgPath = '';
        this.workService.getProjectDescription(projectTitle).subscribe(function(response:any){
               self.content = JSON.parse(response._body);
            
               self.content.images.forEach(element => {
                   imgPath = "/./assets/images/work/"+ element + '.png';
                   self.projectImageGallery.push(imgPath) 
               });

              if(!self.content.length){
                  self.errorMessage = true;
               }
          });
  } 
  
  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}