import React from 'react';
import {render} from 'react-dom';
import App from './components/app';
import 'styles/app.less';

const markup = (
    <App />
);

render(markup, document.getElementById('app'));