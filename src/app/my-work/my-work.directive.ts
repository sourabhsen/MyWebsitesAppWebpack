import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[isometric-grid]'
})

export class IsometricGrid {
  max:number = 0;
  min:number = 0;

  constructor(private el: ElementRef, private renderer: Renderer) {
     alert('construtctor');
      this.init();
      debugger;
   }
  
  init(){
        debugger;
         alert('method is called');
        /* [].slice.call(document.querySelectorAll('.isolayer')).forEach(function(el) {
                    new window.IsoGrid(el, {
                        type : 'scrollable',
                        transform : 'translateX(-15vw) translateY(275px) rotateX(45deg) rotateZ(45deg)',
                        stackItemsAnimation : {
                            properties : function(pos) {
                                return {
                                    translateZ: (pos+1) * 50,
                                    rotateZ: this.getRandomInt(-3, 3)
                                };
                            },
                            options : function(pos, itemstotal) {
                                return {
                                    type: window.dynamics.bezier,
                                    duration: 500,
                                    points: [{"x":0,"y":0,"cp":[{"x":0.2,"y":1}]},{"x":1,"y":1,"cp":[{"x":0.3,"y":1}]}],
                                    //delay: (itemstotal-pos-1)*40
                                };
                            }
                        },
                        onGridLoaded : function() {
                            window.classie.add(document.body, 'grid-loaded');
                        }
                    });
                }); */

                console.log('isogrid need to call');

  }
  getRandomInt(){
       return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  }
}
