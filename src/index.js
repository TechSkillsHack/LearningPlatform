import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './vendor/styles/w3.css';
import './vendor/fonts/css/all.min.css';
import './vendor/icons/icon.css';
import './vendor/fonts/css/fontawesome.min.css';
import * as serviceWorker from './serviceWorker';
import './styles/scss/styles.scss';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
if (module.hot) {
    module.hot.accept();
}