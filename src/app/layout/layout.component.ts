import {Component} from '@angular/core';

import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {HomeComponent} from '../home/home.component';
import {HeaderComponent} from '../header/header.component';
import {ProfileComponent} from '../profile/profile.component';

@Component({
   selector:'layout',
   template: require('./layout.html'),
   directives: [HeaderComponent,HomeComponent,ProfileComponent] 
})

/*@RouteConfig([
   {path:'/home', name:'Home',component:HomeComponent,useAsDefault:true},
   {path:'/profile', name:'Profile',component:ProfileComponent},
   {path: '/**', redirectTo: ['Home'] }
])*/

export class LayoutComponent{}