import {style} from '@vanilla-extract/css'
import { vars } from '../../../styles/vars.css'

export const rewardCardStyle = style({
    '@media':{
        'screen and (min-width: 600px)':{
            flexDirection:'row'
        },
        'screen and (min-width: 1024px)':{
            padding:'2rem'
        }
    }
})

export const rewardCardDescriptionHeaderTitleStyle = style({
    fontSize:'1.2rem',
    '@media':{
        'screen and (min-width: 1024px)':{
            fontSize:'1.5rem',
        },
    }
})

export const rewardCardPointsNumber = style({
    fontSize:'1.2rem',
    '@media':{
        'screen and (min-width: 1024px)':{
            fontSize:'1.5rem',
        },
    }
})

export const rewardCardPointsIcon = style({
    width:'1.5rem',
    '@media':{
        'screen and (min-width: 1024px)':{
            width:'2rem',
        },
    }
})

export const rewardCardRedeemButton = style({
    background: vars.colors.primary,
    color: vars.colors.secondary,
    border:`2px solid ${vars.colors.primary}`,
    transition: 'all 0.2s ease',
    selectors: {
        '&:not(:disabled):hover': {
            color:vars.colors.primary,
            background:vars.colors.secondary
        },
      },
})