import {style} from '@vanilla-extract/css'

export const modalStyle = style({
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    zIndex: 900,
    backdropFilter: 'blur(8.2px)',
    WebkitBackdropFilter: 'blur(8.2px)'
})

export const modalBodyStyle = style({
    position: 'relative',
    background: '#2b2b2b',
    width: '100vw',
    height: 'calc(100vh - 4rem)',
    alignSelf:'flex-start',
    border: 'none',
    padding: '4rem 1rem 1rem 1rem',
    display:'flex',
    '@media':{
        'screen and (min-width:768px)':{
            width: 'fit-content',
            height: 'fit-content',
            border: '2px solid #ffae00',
            borderRadius: '1rem',
            padding: '2.5rem',
            alignSelf:'center'
        }
    }
})

export const modalCloseButton = style({
    position: 'absolute',
    top: '0.3rem',
    right: '0.3rem',
    color: '#ffae00',
})