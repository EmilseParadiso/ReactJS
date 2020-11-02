import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import NavBar from'./NavBar/NavBar.js';

const divRoot =document.querySelector("#root");
ReactDOM.render(<NavBar />, divRoot);

