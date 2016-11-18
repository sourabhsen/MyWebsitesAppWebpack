import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Rx';

import {ProfileService} from './profile.service';
import {NewlinePipe} from '../../pipes/utility';

import {window} from '@angular/platform-browser/src/facade/browser';


@Component({
    selector: 'profile',
    template: require('./profile.html'),
    providers: [ProfileService],
    pipes: [NewlinePipe]
})

export class ProfileComponent {

    listItem: any;
    message$: Observable<string>;
    errorMessage: boolean = false;
    backgroundArray: Array<Object>;
    series: Array<Object>;
    seriesDefaultItem: any;
    options: any;
    myHighSkill:Array<string>;
    newSkills :Array<string>;

    constructor(private profile_service: ProfileService) {
        this.init();
        this.getLinkedInProfile();
    }

    init() {
         
        this. myHighSkill = [
            'HTML', 'HTML 5','Cascading Style Sheets (CSS)','Mobile Applications','User Interface Design',
            'User Interface','HTML5','CMS','JSON','Web Developmen','CSS','jQuery','AJAX','JavaScript','Java'

        ];

        this.newSkills = ['Angular1','Angular2','Webpack']

        this.options = {

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
                background: []
            },
            yAxis: {
                min: 0,
                max: 100,
                lineWidth: 0,
                tickPositions: []
            },
            plotOptions: {
                solidgauge: {
                    borderWidth: '14px',
                    dataLabels: {
                        enabled: false
                    },
                    linecap: 'square',
                    stickyTracking: false
                }
            },
            series: []

        };
    }

    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    getLinkedInProfile() {
        let self = this;
        let _self = this;
        this.profile_service.getLinkedinProfile().subscribe(function (response: any) {
            self.listItem = JSON.parse(response._body);
            console.log(self.listItem);

            let defaultItem = {
                outerRadius: '0%',
                innerRadius: '0%',
                borderWidth: 0
            }
            let radius = 95;
            let axis = 90;

            let seriesDefaultItem: any = {}
            //To create arrary for background
            self.listItem.skills.values.forEach(element => {

                _self.options.pane.background.push(defaultItem);

                seriesDefaultItem.name = element.skill.name;
                seriesDefaultItem.borderColor = _self.getRandomColor();
                seriesDefaultItem.strokelinecap = 'sqaure';
                
                radius = radius - 5;
                if(_self.myHighSkill.indexOf(seriesDefaultItem.name) > 0){
                      axis = Math.floor(Math.random() * 31) + 70;
                }else{
                     axis = Math.floor(Math.random() * 31) + 50;
                }
               
                
                seriesDefaultItem.data = [
                    {
                        color: _self.getRandomColor(),
                        radius: radius + '%',
                        innerRadius: radius + '%',
                        y: axis
                    }
                ]

                _self.options.series.push(seriesDefaultItem);
                seriesDefaultItem = {};


            });


            _self.displaySkillsChart(_self.options);
            if (!_self.listItem.length) {
                _self.errorMessage = true;
            }

        });
    }

    displaySkillsChart(chartsOption) {
        window.Highcharts.chart('chart1', chartsOption, function () {

            // Move icon
            this.renderer.path([])
                .attr({
                    'stroke-linecap': "butt",
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