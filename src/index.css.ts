import { globalStyle } from '@vanilla-extract/css';
import { vars } from './styles/vars.css';

globalStyle('*',{
    margin:0,
    padding:0,
    boxSizing: 'border-box',
    fontFamily: '"Poetsen One", Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
    fontWeight:400,
})

globalStyle('html',{
  background:vars.colors.secondary,
})

globalStyle('body', {
  minHeight:'100vh',
});

globalStyle('a', {
  color: '#ffffff',
  textDecoration: 'none',
  fontWeight:400,
});
