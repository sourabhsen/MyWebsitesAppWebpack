import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Rx';

import {ProfileService} from './profile.service';
import {NewlinePipe} from '../../pipes/utility';

import {window} from '@angular/platform-browser/src/facade/browser';


@Component({
    selector:'profile',
    template:require('./profile.html'),
    providers:[ProfileService],
    pipes:[NewlinePipe]
})

export class ProfileComponent{
     
     public listItem:Array<Object>;
     message$: Observable<string>;
     errorMessage: boolean = false;
     backgroundArray:Array<Object>;
     series:Array<Object>;
     
    constructor(private profile_service:ProfileService){
        
        this.getProfile();
    }

    getProfile(){
       let self = this;
       let options ={
               
             chart: {
                    type: 'solidgauge',
                    marginTop: 50
              },
                title: {
                    text: 'Activity',
                    style: {
                        fontSize: '24px'
                    }
                },
                tooltip: {
                    borderWidth: 0,
                    backgroundColor: 'none',
                    shadow: false,
                    style: {
                        fontSize: '16px'
                    },
                    pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
                    positioner: function (labelWidth) {
                        return {
                            x: 200 - labelWidth / 2,
                            y: 180
                        };
                    }
                },
                 pane: {
                    startAngle: 0,
                    endAngle: -360,
                    background: [{ // Track for Move
                        outerRadius: '0%',
                        innerRadius: '0%',
                        borderWidth: 0
                    }, { // Track for Exercise
                        outerRadius: '0%',
                        innerRadius: '0%',
                    
                        borderWidth: 0
                    }, { // Track for Stand
                        outerRadius: '0%',
                        innerRadius: '0%',
                        borderWidth: 0
                    }]
                },
                yAxis: {
                    min: 0,
                    max: 100,
                    lineWidth: 0,
                    tickPositions: []
                },
                   plotOptions: {
                    solidgauge: {
                        borderWidth: '24px',
                        dataLabels: {
                            enabled: false
                        },
                        linecap: 'square',
                        stickyTracking: false
                    }
                },
                series:  [
                      {
                        name: 'Move',
                        borderColor: '#40a0f0',
                        strokelinecap:"square",
                        data: [{
                            color: '#ff0000',
                            radius: '90%',
                            innerRadius: '90%',
                            y: 70
                          
                        }]
                    }, {
                        name: 'Exercise',
                        borderColor: '#286da5',
                        data: [{
                            color: window.Highcharts.getOptions().colors[1],
                            radius: '75%',
                            innerRadius: '75%',
                            y: 65
                        }]
                    }, {
                        name: 'Stand',
                        borderColor: '#a1aeb5',
                        data: [{
                            color: window.Highcharts.getOptions().colors[2],
                            radius: '60%',
                            innerRadius: '60%',
                            y: 5
                        }]
                    }
                ]

          };

        this.profile_service.getLinkedinProfile().subscribe(function(response:any){
              self.listItem = JSON.parse(response._body);
              console.log(self.listItem);
              self.displaySkillsChart(options);
              if(!self.listItem.length){
                  self.errorMessage = true;
               }
              
          });
    }

    displaySkillsChart(chartsOption){
                window.Highcharts.chart('chart1',chartsOption,function(){
                        
                // Move icon
                this.renderer.path([])
                    .attr({
                        'stroke-linecap':"butt",
                        'zIndex': 10
                    })
                    

                // Exercise icon
                this.renderer.path()
                    .attr({
                      
                        'zIndex': 10
                    })
                  

                // Stand icon
                this.renderer.path()
                    .attr({
                        
                        'zIndex': 10
                    })

                })
    }
}