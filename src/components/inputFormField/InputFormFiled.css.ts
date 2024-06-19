import {style} from '@vanilla-extract/css'
import { vars } from '../../styles/vars.css'

export const inputFormFieldInputStyle = style({
    border:'none',
    borderBottom: `3px solid ${vars.colors.secondary}`,
    background:'transparent',
    fontSize: '1rem'
})

export const errorBottomBorder = style({
    borderBottom: `3px solid ${vars.colors.error}`
})