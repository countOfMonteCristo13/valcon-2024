import {style} from '@vanilla-extract/css'

export const buttonStyle = style({
    fontSize: '1rem',
    fontWeight: 500,
    borderStyle: 'none',
    ':disabled':{
        opacity: 0.5,
        cursor: 'default'
    }
})