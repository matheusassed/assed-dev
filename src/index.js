import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/hub-videos-botafogo' component={() => { return(<h1>Página do Hub de vídeos (projeto inicial)</h1>)}} />
      <Route path='/' component={App} exact />
      <Route component={() => { return(<h1>Página não encontrada (404)</h1>)}} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
