import {style} from '@vanilla-extract/css'

export const carouselStyle = style({
    position:'relative',
    margin: 'auto',
    overflow:'hidden'
})

export const carouselImageStyle = style({
   objectFit:'contain'
})

export const carouselButtonStyle = style({
    position:'absolute',
    top:'50%',
    transform:'translateY(-50%)',
    border:'none',
    ':first-of-type':{
        left:0
    },
    ':last-of-type':{
        right:0
    }
})

    
  
  
  
  
  
  
  
  
  
  