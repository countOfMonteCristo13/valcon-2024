import {style} from '@vanilla-extract/css'
import { vars } from '../../../styles/vars.css';

export const propHeaderStyle = style({
    justifyContent:'space-between',
    paddingBottom: '0.5rem',
    borderBottom:`2px solid ${vars.colors.primary}`
})

export const propHeaderPointsStyle = style({
    gap: '0.2rem',
})