/**
 *  @name: index.jsx
 *  @version: 1.0.0
 *  @author: Trejocode - Sergio
 *  @description: Punto de Entrada de React
 * 	@process: 1
*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import * as serviceWorker from './serviceWorker';

// Hoja de estilos
import './sass/style.scss';

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);


// Service Worker "register" para una PWA.
serviceWorker.register();
