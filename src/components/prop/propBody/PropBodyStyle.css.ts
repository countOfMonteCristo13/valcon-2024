import {style} from '@vanilla-extract/css'
import { vars } from '../../../styles/vars.css'

export const propBodyStyle = style({
    paddingBottom: '0.5rem',
    borderBottom: `2px solid ${vars.colors.primary}`,
    '@media':{
        'screen and (min-width:1024px)':{
            flexDirection:'row',
            justifyContent:'space-between'
        },
        'screen and (min-width:450px) and (max-width:768px)':{
            flexDirection:'row',
            justifyContent:'space-between'
        }
    }
    
})

export const propBodyHashtagsTitleStyle = style({
    display:'flex',
    gap:'0.1rem',
})

export const propBodyHashtagsStyle = style({
    '@media':{
        'screen and (min-width:1024px)':{
            justifyContent:'flex-end'
        },
        'screen and (min-width:450px) and (max-width:768px)':{
            justifyContent:'flex-end'
        }
    }
})

export const propGif = style({
    width:'5rem',
    height:'5rem',
    aspectRatio:'1/1',
    objectFit:'contain',
})

export const gifModal = style({
    maxWidth:'350px',
    maxHeight:'350px',
})

export const hashtagsAndGifContainer = style({
    '@media':{
        'screen and (min-width:1024px)':{
            alignItems:'flex-end'
        },
        'screen and (min-width:450px) and (max-width:768px)':{
            alignItems:'flex-end'
        }
    }
})
