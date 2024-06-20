import {style} from '@vanilla-extract/css'
import { vars } from '../../../styles/vars.css'

export const sideMenuBarStyle = style({
    display:'none',
    '@media':{
        'screen and (min-width:768px)':{
            display: 'flex',
            position: 'sticky',
            top: 0,
            height: '100vh',
            maxWidth: 'fit-content',
            flexDirection: 'column',
            borderRight: `2px solid ${vars.colors.primary100}`,
            background: vars.colors.tertiary,
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 0.5rem'
        },
        'screen and (min-width:1024px)':{
            padding:'2rem'
        }
    }
})

export const logoImageStyle = style({
    aspectRatio: '1/1',
    width: '3rem'
})


export const logoTitleStyle = style({
    display:'none',
    color:vars.colors.primary
})

export const showLogoTitle = style({
    display: 'block'
})

export const sideMenuBarLinkStyle = style({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '0.5rem',
    borderRadius: '1rem',
    color: vars.colors.primary,
    border: `2px solid ${vars.colors.tertiary}`,
    transition: 'all 0.2s ease',
    ':hover':{
        backgroundColor: vars.colors.secondary,
        border: `2px solid ${vars.colors.primary}`,
    }
})

export const sideMenuBarActiveLinkStyle = style({
    backgroundColor: vars.colors.secondary,
    border: `2px solid ${vars.colors.primary}`,
})

export const toggleExpansionButton = style({
    color:vars.colors.primary
})


