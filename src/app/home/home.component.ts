import {Component,OnInit, ElementRef} from '@angular/core';
import {window} from '@angular/platform-browser/src/facade/browser';
import {ProfileComponent} from '../profile/profile.component';
import {ProfileWidgetComponent} from '../profile-widget/profileWidget.component';
import {ProfileAboutWidgetComponent} from '../profile-about-widget/profileAboutWidget.component';
import {FeedComponent} from '../feed/feed.component';
import {HomeService} from './home.service';

@Component({
  selector:'home',
  template: require('./home.html'),
  providers:[HomeService],
  directives: [ProfileComponent,ProfileWidgetComponent,ProfileAboutWidgetComponent,FeedComponent]    
})

export class HomeComponent implements OnInit{
  listItem:Array<Object>;
  errorMessage: boolean = false;
  
  constructor(private homeService:HomeService){
    this.loadLikedInProfile();
  }

  loadLikedInProfile() {
        let self = this;
        this.homeService.loadLinkedin().subscribe(function(response:any){});
  }

  ngOnInit(){
     // temporary code for removing loader
      window.$('body').addClass('grid-loaded');
  }
}