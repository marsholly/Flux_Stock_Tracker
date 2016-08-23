import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './components/App'
import CompanySearch from './components/CompanySearch';
import StockList from './components/StockList';


render(
  <Router history={browserHistory}>
    <Route path='/' component={App} >
      <IndexRoute component={App} />
      <Route path='search/:symbol' component={CompanySearch} />
    </Route>
    <Route path='quote/:symbol' component={StockList} />
  </Router>,
  document.getElementById('root')
);
