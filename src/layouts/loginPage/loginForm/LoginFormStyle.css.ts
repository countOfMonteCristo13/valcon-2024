import {style} from '@vanilla-extract/css'
import { vars } from '../../../styles/vars.css'

export const loginFormStyle = style({
    gap: '3rem',
    '@media':{
        'screen and (min-width:1024px)':{
            minWidth: '350px'
        }
    }
})

export const loginFormTitle = style({
    fontSize:'2rem'
})

export const loginFormSubmitButton = style({
    background: vars.colors.primary,
    color: vars.colors.secondary,
    border:`2px solid ${vars.colors.primary}`,
    transition: 'all 0.2s ease',
    width: '100%',
    ':hover':{
        background: vars.colors.secondary,
        color: vars.colors.primary,
    }
})