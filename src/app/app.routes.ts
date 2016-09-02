import {Component} from '@angular/core';


import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {ProfileComponent} from './profile/profile.component';
import {BlogComponent} from './blog/blog.component';

import {LayoutComponent} from './layout/layout.component';

export const MyAppRoutes = [
 
   {path:'',component:HomeComponent},
   {path:'profile',component:ProfileComponent},
   {path:'blog',component:BlogComponent}
 
];