import {Component} from '@angular/core';
import { Observable } from 'rxjs/Rx';

import {ProfileService} from './profile.service';
import {NewlinePipe} from '../../pipes/utility';

@Component({
    selector:'profile',
    template:require('./profile.html'),
    providers:[ProfileService],
    pipes:[NewlinePipe]
})

export class ProfileComponent{
     public listItem:Array<Object>;
      message$: Observable<string>;
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