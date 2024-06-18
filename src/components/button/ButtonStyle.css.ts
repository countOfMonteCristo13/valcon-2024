import {style} from '@vanilla-extract/css'

export const buttonStyle = style({
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    fontWeight: 500,
    borderRadius: '0.5rem',
    borderStyle: 'none',
    cursor: 'pointer',
    ':disabled':{
        opacity: 0.5,
        cursor: 'default'
    }
})