import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Router, Route, Link, browserHistory, hashHistory } from 'react-router';
import App from '../components/App.jsx';
import NoMatch from '../components/NoMatch.jsx';

ReactDOM.render((
   <Router history={hashHistory}>
    <Route path='/' component={App} />
    <Route path='*' component={NoMatch} />
   </Router>
), document.getElementById('root'));