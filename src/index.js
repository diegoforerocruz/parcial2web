import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Informacion from './components/informacion';
import Visualizacion from './components/visualizacion';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {IntlProvider} from 'react-intl';


function getBrowserLang() {
  return navigator.language || navigator.userLanguage
}

function getURL() {
  const lang = getBrowserLang()
  if(lang == "en") {
    let localeEnMessages="https://gist.githubusercontent.com/josejbocanegra/5dc69cb7feb7945ef58b9c3d84be2635/raw/64146e99e4416da3a8be2e2da4156cb87b3f6fd0/series-en.json"
      return localeEnMessages
  }else {
    let localeEsMessages="https://gist.githubusercontent.com/josejbocanegra/c55d86de9e0dae79e3308d95e78f997f/raw/d9eb0701f6b495dac63bbf59adc4614a9eb5fbc8/series-es.json"
      return localeEsMessages
  }
}


ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={getBrowserLang()} messages={getURL()}>
      <Informacion urls={getURL()}/>
      <Visualizacion urls={getURL()}/>
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
