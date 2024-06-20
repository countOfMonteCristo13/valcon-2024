import {style} from '@vanilla-extract/css'

export const loginPageHeadingStyle = style({
    fontFamily: '"Dancing Script", cursive',
    fontSize: '3.5rem',
    textAlign: 'center',
    '@media':{
        'screen and (min-width:1024px)':{
            fontSize: '6rem'
        }
    }
})