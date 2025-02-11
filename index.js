import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import './src/style.css';
import {createTheme, ThemeProvider} from '@mui/material';
import {ResultProvider} from "./src/context/ResultContext";

const theme = createTheme({
    typography: {
        fontFamily: 'Raleway, serif',
    },
});

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <ResultProvider>
                <App/>
            </ResultProvider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
