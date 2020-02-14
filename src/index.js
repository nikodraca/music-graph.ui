import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { HomePage, GenreGraphPage, AuthPage } from './pages';
import reducers from './reducers';

import * as serviceWorker from './serviceWorker';

require('dotenv').config();

const store = createStore(
  reducers,
  compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f)
);

const router = (
  <Router>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/graph/:spotifyUserId?" component={GenreGraphPage} />
      <Route exact path="/auth" component={AuthPage} />
    </div>
  </Router>
);

ReactDOM.render(<Provider store={store}>{router}</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
