import {Component} from '@angular/core';
import {MyAppRoutes} from '../../app/app.routes';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {MyWorkDetailComponent} from '../my-work-detail/my-work-detail.component';


@Component({
   template: require('./work-layout.html'),
   directives: [ROUTER_DIRECTIVES,MyWorkDetailComponent],
   providers:[MyAppRoutes] 
})

export class WorkLayoutComponent{}