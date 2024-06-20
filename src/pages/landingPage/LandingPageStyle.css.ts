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