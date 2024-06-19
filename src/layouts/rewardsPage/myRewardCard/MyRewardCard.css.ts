import {style} from '@vanilla-extract/css'

export const myRewardCardStyle = style({
    position: 'relative',
    cursor: 'pointer',
    width: 'calc(50% - 0.5rem)',
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
    objectFit: 'contain'
})

export const myRewardCardOverlayStyle = style({
    position: 'absolute',
    top: 0,
    background: '#3a3a3abe',
    opacity: 0,
    transition: 'all 0.2s ease',
    ':hover':{
        opacity: 1,
    }
})
  
  
  
  