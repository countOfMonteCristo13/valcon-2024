import {style} from '@vanilla-extract/css'
import { vars } from '../../styles/vars.css';

export const userSuggestionCardStyle = style({
    border: `2px solid ${vars.colors.secondary}`,
    transition: 'all 0.2s ease',
    ':hover':{
        background:vars.colors.tertiary
    }

})

export const userSuggestionCardImageStyle = style({
    width:'2rem',
})