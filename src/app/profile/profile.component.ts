import {Component} from '@angular/core';
import {ProfileService} from './profile.service';

@Component({
    selector:'profile',
    template:require('./profile.html'),
    providers:[ProfileService]
})

export class ProfileComponent{
     public listItem:Array<Object>;
     errorMessage: boolean = false;
     
    constructor(private profile_service:ProfileService){
        this.getProfile();
    }

    getProfile(){
       let self = this;
        this.profile_service.getLinkedinProfile().subscribe(function(response:any){
              self.listItem = JSON.parse(response._body);
              console.log(self.listItem);
              if(!self.listItem.length){
                  self.errorMessage = true;
               }
              
          });
    }
}