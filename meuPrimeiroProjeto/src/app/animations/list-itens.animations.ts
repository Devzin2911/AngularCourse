import { trigger, transition, query, style, stagger, animate, group } from "@angular/animations";

export const mediaMax600 = trigger('list-itens', [
    transition(':enter', [
        query('li', [
            style({
                background: 'yellow',
                transform: 'translateY(100px)'
            }),
            stagger('600ms', animate('1s')),
            group([
                animate(
                    '1s',
                    style({
                        background: 'none',
                    })
                )
            ]),
        ]),
    ]),
    transition('* => *', [
        query(':leave', [
            style({
                opacity: 1,
                background: 'red'
            }),
            animate('1s', style({ opacity: 0 })),
        ], {optional: true }),
    ]),
]);

export const mediaMax700 = trigger('list-itens', [
    transition(':enter', [
        query('li', [
            style({
                background: 'yellow',
                transform: 'translateY(100px)'
            }),
            stagger('600ms', animate('1s')),
            group([
                animate(
                    '1s',
                    style({
                        background: 'none',
                    })
                )
            ]),
        ]),
    ]),
    transition('* => *', [
        query(':leave', [
            style({
                opacity: 1,
                background: 'red'
            }),
            animate('1s', style({ opacity: 0 })),
        ]),
    ]),
]);

export const listItensAnimation = () => {
    if (isMatchMedia(600)) {
        return mediaMax600;
    }

    if (isMatchMedia(700)) {
        return mediaMax700;
    }

    return;
}

const isMatchMedia = (value: number) => {
    return matchMedia(`(max-width: ${value}px)`).matches
}