import { style } from '@vanilla-extract/css'

export const accordionButtonStyle = style({
    transition: 'transform 0.2s ease',
    alignSelf: 'flex-end'
})

export const rotateAccordionButton = style({
    transform: 'rotate(180deg)'
})

export const accordionBodyStyle = style({
    position: 'relative',
    height: 0,
    overflow: 'hidden',
    transition: 'all 0.2s ease',
})

export const accordionTitleStyle = style({
    '@media': {
        'screen and (min-width: 1024px)': {
            fontSize: '1.1rem'
        },

        'screen and (min-width: 1440px)': {
            fontSize: '1.2rem'
        }
    }
})
