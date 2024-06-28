import {style, keyframes} from '@vanilla-extract/css'
import { vars } from '../../styles/vars.css'


const loading = keyframes({
    '100%':{transform:'rotate(1turn)'}
})

export const loaderStyle = style({
    alignSelf:'center',
    width:'50px',
    aspectRatio:'1',
    borderRadius:'50%',
    background:`radial-gradient(farthest-side,${vars.colors.primary} 94%,#0000) top/8px 8px no-repeat, conic-gradient(#0000 30%,${vars.colors.primary})`,
    WebkitMask:'radial-gradient(farthest-side,#0000 calc(100% - 8px),#000 0)',
    margin:'auto',
    animation:`${loading} 1s infinite linear`,
})
