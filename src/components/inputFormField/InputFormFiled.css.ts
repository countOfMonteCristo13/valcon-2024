import {style} from '@vanilla-extract/css'
import { vars } from '../../styles/vars.css'

export const inputFormFieldInputStyle = style({
    border:'none',
    borderBottom: `3px solid ${vars.colors.primary}`,
    background:'transparent',
    fontSize: '1rem',
    ':focus':{
        outline:'none'
    },
    '::-webkit-inner-spin-button':{
        WebkitAppearance:'none',
        margin:0
    },
    '::-webkit-outer-spin-button':{
        WebkitAppearance:'none',
        margin:0
    }
})

export const errorBottomBorder = style({
    borderBottom: `3px solid ${vars.colors.error}`
})