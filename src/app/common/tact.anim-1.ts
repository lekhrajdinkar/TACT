import { trigger, state, style, transition, animate } from "@angular/animations";
import { Injectable } from '@angular/core';

@Injectable()
export class TactAnimation
{
     
}

export const click_trigger = trigger('clickTrigger', [
    // ...
    state('default', style({
         opacity: 1,
      backgroundColor: 'black'
    })),
    state('clicked', style({
           opacity: 1,
      backgroundColor: 'rgb(216, 238, 238)'
    })),
    transition('default => clicked', [
      animate('1s')
    ]),
    transition('clicked => default', [
      animate('1s')
    ]),
  ])
 
  export const highlightPageNum = trigger('highlightPageNum', [
    //state
    state('unselected', style({
      border: '1px solid blue',
      backgroundColor: 'white',
      padding : '6px',
      transform : 'scale(1)'
    })),
    state('selected', style({
      border: '2px solid blue',
      backgroundColor: 'rgb(216, 238, 238)',
      padding : '5px',
      
    })),
   //transition
    transition('unselected => selected', [
      animate('0.2s', style({transform : 'translateY(20px) scale(1.5)'})),
      animate('0.2s', style({backgroundColor: 'rgb(231, 228, 210)', transform : 'translateX(-20px) scale(2)'})),
      animate('0.2s', style({transform : 'translateY(-20px) scale(1.5)'})),
      animate('0.2s', style({backgroundColor: 'rgb(231, 228, 210)', transform : 'translateX(20px) scale(2)'})),
      animate('1s', style({transform : 'scale(5)'}))
    ])
  ])

  export const div_trigger = trigger('divTrigger', [
    // ...
    state('default', style({
      opacity: 1, height: '1px', width: '0',
      backgroundColor: 'red'
    })),
    state('clicked', style({
      opacity: 0.5, height: '1px', width: '100%',
      backgroundColor: 'rgb(29, 208, 231)'
    })),
    transition('default => clicked', [
      animate('0.5s')
    ]),
    transition('clicked => default', [
      animate('0.5s')
    ]),
  ])

  //Comp
  export const compBump = trigger('compBump', [
    // ...
    state('default', style({
    
    })),
    state('bump', style({
      backgroundColor:'rgb(220, 255, 150)',
      border: "3px solid blue"
    })),
    transition('default => bump', [
      animate('0.5s', style({transform :  'translateX(-2rem)'})),
      animate('0.5s', style({transform :  'translateX(2rem)'})),
      animate('0.2s', style({transform :  'scale(1.2)'}))
    ])
  ])

  export const compBumpNoState = trigger('compBumpNoState', [
    transition('* => *', [
      animate('0.2s', style({transform :  'scale(1.5)'}))
    ])
  ])



  //fadeout
  export const routingAminTriggerFadeOut = trigger('routingAminTriggerFadeOut', [
    transition(':enter', 
    [
      style({opacity: 0}),
      animate('2s')
    ])

  ])

  //Enter Left
  export const routingAminTriggerEnterLeft = trigger('routingAminTriggerEnterLeft', [
    transition(':enter', 
    [
      style({transform: 'translateX(-100%)'}),
      animate('1s')
    ]),

    transition(':leave', 
    [
      style({transform: 'translateX(100%)'}),
      animate('0.1s')
    ])

  ])

  //Enter Up
  export const routingAminTriggerGoUp= trigger('routingAminTriggerGoUp', [
    transition(':enter', 
    [
      style({transform: 'translateY(-100%)'}),
      animate('0.5s')
    ]),

    transition(':leave', 
    [
      style({transform: 'translateY(100%)'}),
      animate('0.5s')
    ])

  ])

  

