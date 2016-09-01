import {Component} from '@angular/core';

import {LayoutComponent} from './layout/layout.component';

@Component({
  selector:'my-app',
  template: '<layout></layout>',
   directives: [LayoutComponent]    
})
export class AppComponent{

}