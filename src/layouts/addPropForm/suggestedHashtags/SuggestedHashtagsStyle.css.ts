import {style} from '@vanilla-extract/css'
import { vars } from '../../../styles/vars.css'

export const suggestedHashtagCardStyle = style({
    lineHeight:1,
    gap:'0.1rem',
    padding:'0.3rem 0.6rem',
    border: `2px solid ${vars.colors.secondary}`,
    transition: 'all 0.2s ease',
    color: vars.colors.primary,
    ':hover':{
        background:vars.colors.secondary,
    }
})