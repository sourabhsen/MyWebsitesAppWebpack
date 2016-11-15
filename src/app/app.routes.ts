import {Component} from '@angular/core';


import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {ProfileComponent} from './profile/profile.component';
import {BlogComponent} from './blog/blog.component';
import {BlogDetailComponent} from './blog/blogDetail.component';
import {MyWorkComponent} from './my-work/my-work.component';
import {LayoutComponent} from './layout/layout.component';
import {MyWorkDetailComponent} from './my-work-detail/my-work-detail.component';
import {NewBlogComponent} from './blog/newblog.component';

export const MyAppRoutes = [
 
   {path:'',component:HomeComponent},
   {path:'profile',component:ProfileComponent},
   {path:'blog',component:BlogComponent},
   {path:'work',component:MyWorkComponent},
   {path:'work/:id',component:MyWorkDetailComponent},
   {path:'profile/:code=',component:HomeComponent},
   {path:'post/:id/:title',component:BlogDetailComponent},
   {path:'post/add',component:NewBlogComponent}
 
];