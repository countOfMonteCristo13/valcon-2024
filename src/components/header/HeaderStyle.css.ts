import {style} from '@vanilla-extract/css'
import { vars } from '../../styles/vars.css'

export const headerStyle = style({
    position:'sticky',
    top:0,
    width:'100%',
    background: vars.colors.secondary,
    zIndex:900
})

