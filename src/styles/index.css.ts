import {style} from '@vanilla-extract/css'
import { vars } from './vars.css'

export const textColor = style({
    color:vars.colors.primary
})

export const textColorTertiary = style({
    color: vars.colors.tertiary
})

export const backgroundSecondary = style({
    background: vars.colors.secondary
})

export const backgroundTertiary = style({
    background: vars.colors.tertiary
})

export const flexCenter = style({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
})

export const flexAlignCenter = style({
    display:'flex',
    alignItems:'center',
})


export const flexColumn = style({
    display: 'flex',
    flexDirection:'column'
})

export const flexWrap = style({
    flexWrap: 'wrap'
})

export const gap0_5 = style({
    gap:'0.5rem'
})

export const borderPrimary = style({
    border: `2px solid ${vars.colors.primary}`
})

export const borderRadius0_5 = style({
    borderRadius:'0.5rem'
})

export const borderRadius1 = style({
    borderRadius:'1rem'
})

export const padding0_5 = style({
    padding:'0.5rem'
})

export const padding1 = style({
    padding:'1rem'
})

export const padding2 = style({
    padding:'2rem'
})
