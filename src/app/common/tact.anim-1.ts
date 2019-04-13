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

  

