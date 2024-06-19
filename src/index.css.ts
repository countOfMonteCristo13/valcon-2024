import { globalStyle } from '@vanilla-extract/css';

globalStyle('*',{
    margin:0,
    padding:0,
    boxSizing: 'border-box',
    fontFamily: '"Poetsen One", Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
    fontWeight:400
})

globalStyle('body', {
  display:'flex',
  minHeight:'100vh',
  backgroundColor:'#3a3a3a',
});

globalStyle('a', {
  color: '#ffffff',
  textDecoration: 'none',
  fontWeight:400,
});

