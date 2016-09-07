import {Component} from '@angular/core';


import {LayoutComponent} from './layout/layout.component';
import { IsometricGrid } from './my-work/my-work.directive';

@Component({
  selector:'my-app',
  template: '<layout></layout>',
   directives: [LayoutComponent,IsometricGrid]    
})

export class AppComponent{

}