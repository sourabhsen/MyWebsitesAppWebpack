import {Component} from '@angular/core';

import { IsometricGrid } from './my-work.directive';

@Component({
 template:require('./my-work.html'),
 directives:[IsometricGrid]
})

export class MyWorkComponent{
    constructor(){
       
    }
}