import {Component} from '@angular/core';
import {RouteConfig,ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
    selector:'app-header',
    template: require('./header.html'),
    directives: [ROUTER_DIRECTIVES] 
})

export class HeaderComponent{}