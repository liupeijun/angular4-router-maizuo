import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const sidebarAnimate = trigger('sidebar', [
    // 定义一个状态in
    state('out', style({ 'opacity': '0', transform: 'translateX(-100%)' })),
    // 定义另外一个状态out
    state('in', style({ 'opacity': '1', transform: 'translateX(0px)'})),
    transition('out=>in', animate(500, keyframes([
        style({ 'opacity': '0', transform: 'translateX(-100%)' }),
        style({ 'opacity': '1', transform: 'translateX(0)' })
    ]))),
    transition('in=>out', animate(500, keyframes([
        style({ 'opacity': '1', transform: 'translateX(0)' }),
        style({ 'opacity': '0', transform: 'translateX(-100%)' })
    ]))),
]);