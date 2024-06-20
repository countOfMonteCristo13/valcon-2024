import {style} from '@vanilla-extract/css'

export const myRewardInfoCardImageStyle = style({
    '@media':{
        'screen and (min-width: 768px)':{
            width:'250px'
        },
    }
})

export const myRewardInfoCardDescriptionStyle = style({
    '@media':{
        'screen and (min-width: 768px)':{
            height: '100%',
            justifyContent: 'space-between'
        },
    }
})