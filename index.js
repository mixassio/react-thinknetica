import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './src/App';
/* eslint linebreak-style: ["error", "windows"] */

ReactDom.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root'),
);
