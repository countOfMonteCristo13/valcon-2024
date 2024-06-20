import {createThemeContract, createTheme} from '@vanilla-extract/css'

const colors = createThemeContract({
    primary:null,
    primary100:null,
    secondary:null,
    secondary100:null,
    tertiary:null,
    error:null,
})

export const dark = createTheme(colors,{
        primary:'#ffae00',
        primary100:'#ffae0073',
        secondary:'#3a3a3a',
        secondary100:'#3a3a3abe',
        tertiary:'#2b2b2b',
        error:'#ff0000'
})

export const light = createTheme(colors,{
        primary:'#555b6e',
        primary100:'#555b6e73',
        secondary:'#bee3db',
        secondary100:'#bee3dbbe',
        tertiary:'#89b0ae',
        error:'#ff0000'
})

export const vars = {colors}