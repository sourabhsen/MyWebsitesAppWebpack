import {Component} from '@angular/core';

import {ProfileComponent} from '../profile/profile.component';
import {ProfileWidgetComponent} from '../profile-widget/profileWidget.component';
import {ProfileAboutWidgetComponent} from '../profile-about-widget/profileAboutWidget.component';

@Component({
  selector:'home',
  template: require('./home.html'),
  directives: [ProfileWidgetComponent,ProfileAboutWidgetComponent]    
})

export class HomeComponent{

}