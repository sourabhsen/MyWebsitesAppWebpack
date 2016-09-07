import {Component,OnInit, ElementRef} from '@angular/core';
import {window} from '@angular/platform-browser/src/facade/browser';
import {ProfileComponent} from '../profile/profile.component';
import {ProfileWidgetComponent} from '../profile-widget/profileWidget.component';
import {ProfileAboutWidgetComponent} from '../profile-about-widget/profileAboutWidget.component';

@Component({
  selector:'home',
  template: require('./home.html'),
  directives: [ProfileWidgetComponent,ProfileAboutWidgetComponent]    
})

export class HomeComponent implements OnInit{
  constructor(private element:ElementRef){
       
  }

  ngOnInit(){
      window.$('body').addClass('grid-loaded');
  }
}