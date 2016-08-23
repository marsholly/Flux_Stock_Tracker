import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './components/App'
import CompanySearch from './components/CompanySearch';
import StockList from './components/StockList';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

render(
  <Router history={browserHistory}>
    <Route path='/' component={Main} >
      <IndexRoute component={App} />
      <Route path='search/:symbol' component={CompanySearch} />
      <Route path='quote/:symbol' component={StockList} />
    </Route>
  </Router>,
  document.getElementById('root')
);
