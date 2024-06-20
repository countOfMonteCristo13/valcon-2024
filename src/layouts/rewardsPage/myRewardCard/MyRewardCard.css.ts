import {style} from '@vanilla-extract/css'
import { vars } from '../../../styles/vars.css'

export const myRewardCardStyle = style({
    position: 'relative',
    width: 'calc(50% - 0.5rem)',
    overflow: 'hidden',
    '@media':{
        'screen and (min-width:768px)':{
            width: '45%'
        },
        'screen and (min-width:1024px)':{
            width: 'calc(50% - 1rem)'
        }
    }
})

export const myRewardCardImageStyle = style({
    aspectRatio: '1/1',
    objectFit: 'contain',
})

export const myRewardCardOverlayStyle = style({
    position: 'absolute',
    top: 0,
    background: vars.colors.secondary100,
    opacity: 0,
    transition: 'all 0.2s ease',
    ':hover':{
        opacity: 1,
    }
})
  
  
  
  