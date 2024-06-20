import {style} from '@vanilla-extract/css'
import { vars } from '../../styles/vars.css'

export const rewardsPageStyle = style({
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

export const allRewardsStyle = style({
    gridArea:'1 / 1 / 2 / 2',
    minHeight:'100vh',
    '@media':{
        'screen and (min-width: 768px)':{
            gridArea: '1 / 1 / 2 / 3',
            borderRight: `2px solid ${vars.colors.primary100}`,
            display: 'flex',
            flexDirection: 'column',
        }
    }
})

export const allRewardsHeaderStyle = style({
    '@media':{
        'screen and (min-width: 1024px)':{
            padding:'2rem'
        }
    }
})

export const rewardsHeaderTitleStyle = style({
    lineHeight:1,
    fontSize:'2rem',
    '@media':{
        'screen and (min-width: 768px)':{
            fontSize:'2.5rem'
        }
    }
})

export const headerButtonStyle = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.5rem',
    borderRadius: '1rem',
    color: vars.colors.primary,
})

export const allRewardsHeaderButtonStyle = style({
    '@media':{
        'screen and (min-width: 768px)':{
            display:'none'
        }
    }
})

export const allRewardsListStyle = style({
    padding: '0 1rem 1rem 1rem',
    '@media':{
        'screen and (min-width: 1024px)':{
            padding: '0 2rem 2rem 2rem',
            gap: '2rem'
        }
    }
})

export const myRewardsStyle = style({
    display:'none',
    '@media':{
        'screen and (min-width: 768px)':{
            background: vars.colors.tertiary,
            gridArea: '1 / 3 / 2 / 4',
            display: 'flex',
            flexDirection: 'column',
            padding: '1rem',
            gap: '1rem',
        },
        'screen and (min-width: 1024px)':{
            padding: '2rem',
            gap: '2rem'
        }
    },
    
})

export const myRewardsHeaderStyle = style({
    background:vars.colors.secondary,
    border:`2px solid ${vars.colors.primary}`,
    '@media':{
        'screen and (min-width: 768px)':{
            padding: '0.5rem 1rem',
            borderRadius: '1rem',
            lineHeight: 1.3,
            width: '100%',
            alignSelf: 'center',
            textAlign: 'center'
        },
    },
})

export const myRewardsListStyle = style({
    '@media':{
        'screen and (min-width: 1024px)':{
            gap: '2rem'
        },
    },
})

export const myRewardsMobileStyle = style({
    position:'absolute',
    top:0,
    minHeight:'100vh',
    width:'100vw',
    '@media':{
        'screen and (min-width: 768px)':{
            display:'none'
        },
    },
})