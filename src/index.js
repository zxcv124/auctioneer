import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

newFunction();
function newFunction() {
    render(<App />, document.getElementById('root'));
}

