import {style} from '@vanilla-extract/css'
import { vars } from '../../styles/vars.css'

export const addPropFormStyle = style({
    position: 'relative',
    borderRadius: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'center',
    gap: '2rem',
    height: '100%',
    width: '100%',
    '@media':{
        'screen and (min-width: 768px)':{
            justifyContent: 'space-between',
            height: 'fit-content',
            width: 'fit-content'
        }
    }
})

export const addPropFormBodyStyle = style({
    display:'flex',
    flexDirection: 'column',
    gap:'1rem',
    '@media':{
        'screen and (min-width: 768px)':{
            flexDirection:'row',
            gap:'3rem'
        }
    }
})

export const addPropFormUpperBodyStyle = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    '@media':{
        'screen and (min-width: 768px)':{
            gap: '2rem',
            maxWidth:'300px'
        }
    }
})

export const addPropFormMessageTextarea = style({
    maxWidth: '100%',
    maxHeight: '200px',
    border: `3px solid ${vars.colors.secondary}`,
    background: vars.colors.secondary,
    fontSize: '1rem'
})

export const errorAddPropFormMessageTextarea = style({
    borderColor: vars.colors.error
})

export const addPropFormHashtags = style({
    height:'2.5rem'
})

export const addPropFormHashtagsCount = style({
    fontSize: '1.2rem',
    fontWeight: 700
})

export const addPropFormHashtagSign = style({
    lineHeight:0.8,
    padding:'0.4rem',
    fontSize:'2rem',
    height:'2.5rem',
})


export const addPropFormHashtagInput = style({
    height:'2.5rem'
})

export const addPropFormHashtagAddButton = style({
    borderBottomLeftRadius: 0,
})

export const addPropFormPointsField = style({
    width:'fit-content'
})

export const addPropFormPointsInput = style({
    width:'70px',
    aspectRatio:'1/1',
    borderRadius:'50%',
    textAlign:'center',
    fontSize:'2rem',
    border:'none',
    background: vars.colors.primary
})

export const addPropFormFooter = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem',
    '@media':{
        'screen and (min-width: 768px)':{
            flexDirection:'row'
        }
    }
})

export const addPropFormSubmitButton = style({
    color: vars.colors.tertiary,
    background: vars.colors.primary,
    border: `2px solid ${vars.colors.primary}`,
    transition: 'all 0.2s ease',
    fontSize: '1.3rem',
    ':hover':{
        background:vars.colors.tertiary,
        color:vars.colors.primary,
    }
})