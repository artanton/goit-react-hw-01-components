import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import PropTypes from "prop-types";
import { ThemeProvider } from 'styled-components';

const theme ={
  colors:{
    darkGray:'#dbdfdf',
    lightGray:'#f3f5f5',
    borderGray:'#3e3f3f',    
  },

  borderRad: {
    norm :'12px',
  }
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      
    <App />
    </ThemeProvider>
  </React.StrictMode>
);
