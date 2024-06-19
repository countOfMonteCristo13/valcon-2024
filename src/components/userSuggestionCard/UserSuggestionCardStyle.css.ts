import {style} from '@vanilla-extract/css'
import { vars } from '../../styles/vars.css';

export const userSuggestionCardStyle = style({
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    background: vars.colors.secondary,
    border: `2px solid ${vars.colors.secondary}`,
    padding: '0.5rem',
    borderRadius: '0.5rem',
    transition: 'all 0.2s ease',
    ':hover':{
        background:vars.colors.tertiary
    }

})

export const userSuggestionCardImageStyle = style({
    aspectRatio:'1/1',
    width:'2rem',
})