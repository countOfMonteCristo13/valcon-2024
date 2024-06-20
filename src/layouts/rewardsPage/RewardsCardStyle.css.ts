import {style} from '@vanilla-extract/css'
import { vars } from "../../styles/vars.css";

export const cardContainer = style({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    color:vars.colors.primary,
    '@media':{
        'screen and (min-width: 768px)':{
            flexDirection:'row'
        }
    }
})

export const cardImages = style({
    width:'100%',
    height:'100%',
    aspectRatio:'1/1',
    objectFit:'contain',
    borderRadius: '0.5rem',
    background: vars.colors.secondary,
    color: vars.colors.primary
})

export const cardDescription = style({
    flex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    color:vars.colors.primary
})

export const cardTextContainer = style({
    background: vars.colors.secondary,
    borderRadius: '0.5rem',
    padding: '1rem',
    width: '100%',
    color: vars.colors.primary,
})