import {style} from '@vanilla-extract/css'
import { vars } from '../../styles/vars.css'

export const InfiniteScrollStyle = style({
    background:vars.colors.secondary,
    width:'100%',
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    gap:'1rem',
    padding:'1rem',
    '@media':{
        'screen and (min-width:1024px)':{
            padding:'2rem',
            gap:'2rem'
        }
    }
})

export const infiniteScrollMessageStyle = style({
    paddingBottom:'1rem',
    textAlign:'center',
    color: vars.colors.primary
})