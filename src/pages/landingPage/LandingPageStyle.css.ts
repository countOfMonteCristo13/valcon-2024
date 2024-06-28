import {style} from '@vanilla-extract/css'
import { vars } from '../../styles/vars.css'

export const landingPageStyle = style({
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr',
    '@media':{
        'screen and (min-width: 768px)':{
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridRowGap: '1rem'
        }
    }
})

export const allPropsStyle = style({
    gridArea:'1 / 1 / 2 / 2',
    '@media':{
        'screen and (min-width: 768px)':{
            gridArea: '1 / 1 / 2 / 3',
            borderRight: `2px solid ${vars.colors.primary100}`,
            display: 'flex',
            flexDirection: 'column',
        }
    }
})

export const landingPageSidebarStyle = style({
    display:'none',
    '@media':{
        'screen and (min-width: 768px)':{
            position:'sticky',
            top:0,
            right:0,
            height:'100vh',
            background: vars.colors.tertiary,
            gridArea: '1 / 3 / 2 / 4',
            display: 'flex',
            flexDirection: 'column',
            alignItems:'center',
            padding: '1rem',
            gap: '1rem',
        },
        'screen and (min-width: 1024px)':{
            padding: '2rem',
            gap: '2rem'
        }
    },
})

export const landingPageSideBarMobileStyle = style({
    position:'absolute',
    top:0,
    minHeight:'100vh',
    width:'100vw',
    background:vars.colors.tertiary,
    '@media':{
        'screen and (min-width: 768px)':{
            display:'none'
        },
    },
})

export const landingPageHeaderButtonStyle = style({
    '@media':{
        'screen and (min-width: 768px)':{
            display:'none'
        }
    }
})

export const landingPageSideBarMoreStyle = style({
    padding:'1rem',
    gap:'1rem',
    display:'flex',
    flexDirection:'column',
    background: vars.colors.tertiary,
})
