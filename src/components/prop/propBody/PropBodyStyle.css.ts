import {style} from '@vanilla-extract/css'
import { vars } from '../../../styles/vars.css'

export const propBodyStyle = style({
    paddingBottom: '0.5rem',
    borderBottom: `2px solid ${vars.colors.primary}`
})

export const propBodyHashtagsTitleStyle = style({
    display:'flex',
    gap:'0.1rem',
})

export const propGif = style({
    width:'5rem',
    height:'5rem',
    aspectRatio:'1/1',
    objectFit:'cover',
})

export const gifModal = style({
    maxWidth:'350px',
    maxHeight:'350px',
})
