import {style} from '@vanilla-extract/css'
import { vars } from '../../styles/vars.css';


export const propStyle = style({
    width:'100%',
    background:vars.colors.tertiary,
})

export const propImageStyle = style({
    width:'2rem',
    aspectRatio:'1/1',
    borderRadius:'50%',
    objectFit:'cover'
})
