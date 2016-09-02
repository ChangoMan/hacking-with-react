import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router'

import App from './pages/App';
import Detail from './pages/Detail';
import List from './pages/List';
import User from './pages/User';


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={ App }>
            <IndexRoute component={ List } />
            <Route path="detail/:repo" component={ Detail } />
            <Route path="user/:user" component={ User } />
        </Route>
    </Router>,
    document.getElementById('app')
);