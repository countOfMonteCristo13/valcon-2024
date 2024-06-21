import {style} from '@vanilla-extract/css'
import { vars } from './vars.css'

export const textColor = style({
    color:vars.colors.primary
})

export const textColorTertiary = style({
    color: vars.colors.tertiary
})

export const textError = style({
    color:vars.colors.error
})

export const backgroundPrimary = style({
    background: vars.colors.primary
})

export const backgroundSecondary = style({
    background: vars.colors.secondary
})

export const backgroundTertiary = style({
    background: vars.colors.tertiary
})

export const fullWidth = style({
    width:'100%'
})

export const fullHeight = style({
    height:'100%'
})

export const heightScreen = style({
    height:'100vh'
})

export const screenWidth = style({
    width:'100vw',
})

export const fullSize = style({
    width:'100%',
    height:'100%'
})

export const fullScreen = style({
    width:'100vw',
    height:'100vh'
})

export const flex = style({
    display:'flex'
})

export const flex1 = style({
    flex:1
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

export const flexJustifyCenter = style({
    display:'flex',
    justifyContent:'center'
})

export const flexColumn = style({
    display: 'flex',
    flexDirection:'column'
})

export const directionColumn = style({
    flexDirection:'column'
})

export const directionRow = style({
    flexDirection:'row'
})

export const flexWrap = style({
    flexWrap: 'wrap'
})

export const justifyAround = style({
    justifyContent:'space-around'
})

export const justifyBetween = style({
    justifyContent: 'space-between'
})


export const gap0_3 = style({
    gap:'0.3rem'
})

export const gap0_5 = style({
    gap:'0.5rem'
})

export const gap1= style({
    gap:'1rem'
})

export const borderPrimary = style({
    border: `2px solid ${vars.colors.primary}`
})

export const box = style({
    border: `2px solid ${vars.colors.primary}`,
    background:vars.colors.tertiary,
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

export const padding0_5_1 = style({
    padding: '0.5rem 1rem'
})

export const paddingX1 = style({
    paddingInline:'1rem',
})

export const paddingTop0_5 = style({
    paddingTop: '0.5rem',
})

export const zIndex800 = style({
    zIndex:800
})

export const zIndex900 = style({
    zIndex:900
})

export const zIndex950 = style({
    zIndex:950
})

export const opacity0 = style({
    opacity:0
}) 

export const cursorPointer = style({
    cursor:'pointer'
})

export const lineHeight1_2 = style({
    lineHeight:1.2
})

export const hideScrollBar = style({
    overflow: 'auto',
    msOverflowStyle:'none',
    scrollbarWidth:'none',
    '::-webkit-scrollbar':{
        display:'none'
    }
})

export const ratio1 = style({
    aspectRatio:'1/1'
})

export const infiniteScrollMessageStyle = style({
    paddingBottom:'1rem',
    textAlign:'center',
    color: vars.colors.primary
})


