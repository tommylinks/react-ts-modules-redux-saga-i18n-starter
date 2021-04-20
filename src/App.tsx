import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { Switch, BrowserRouter, Link, Route } from 'react-router-dom';
import "./utils/i18n";

import modules from './modules';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(combineReducers(modules.reducers), {}, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(function* rootSaga() {
  yield all(modules.sagas);
});

const isBrowserSupportsHistory = 'pushState' in window.history;

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter forceRefresh={!isBrowserSupportsHistory}>
        <Link
          className="App-link"
          to="/counter-redux"
          rel="counterRedux"
        >
          Counter Redux
        </Link>
        <span> </span>
        <Link
          className="App-link"
          to="/counter-db"
          rel="counterDB"
        >
          Counter DB
        </Link>
        <Switch>
          {modules.pages.map(({ path, title, component }: any) => (
              <Route exact key={title} path={path} component={component} />
          ))}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
