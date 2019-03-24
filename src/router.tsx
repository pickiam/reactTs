import * as React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import { App } from './app';
import { About, MembersPageContainer, MemberPageContainer, LoginPageContainer, PostConfPageContainer } from './components';
import { Provider } from 'react-redux';
import { store } from './store';

export const AppRouter: React.StatelessComponent<{}> = () => {

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login" component={LoginPageContainer}></Route>
          <Route component={App} />
        </Switch>
      </Router>
    </Provider>
  );
}