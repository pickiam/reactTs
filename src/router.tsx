import * as React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import { App } from './app';
// import { About, MembersPageContainer, MemberPageContainer, LoginPageContainer, PostConfPageContainer } from './components';
import login from './components/login/pageContainer'
import { Provider } from 'react-redux';
import { store } from './store';
// const Loadable = require('react-loadable')
import * as Loadable from 'react-loadable'
// const LoadableAnotherComponent = Loadable({
//   loader: () => import('./components/login/pageContainer'),
//   loading: () => (<div>Loading...</div>)
// });
export const AppRouter: React.StatelessComponent<{}> = () => {

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {/* <Route path="/login" component={LoadableAnotherComponent}></Route> */}
          <Route component={App} />
        </Switch>
      </Router>
    </Provider>
  );
}