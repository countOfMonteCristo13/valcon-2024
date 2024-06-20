import {style} from '@vanilla-extract/css'
import { vars } from '../../../styles/vars.css';

export const bottomMenuBarStyle = style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 1rem',
    position: 'fixed',
    bottom: 0,
    height: 'fit-content',
    width: '100%',
    background: vars.colors.tertiary,
    '@media':{
        'screen and (min-width:768px)':{
            display:'none'
        }
    }
})

export const hideBottomMenuBar = style({
    display:'none'
})

export const bottomMenuBarLinkStyle = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '0.2rem',
    alignItems: 'center',
    padding: '0.5rem',
    borderTop: `3px solid ${vars.colors.tertiary}`,
    color: vars.colors.primary
})

export const bottomMenuBarActiveLinkStyle = style({
    borderTop: `3px solid ${vars.colors.primary}`
})