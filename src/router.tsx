import * as React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import { App } from './app';
// import { About, MembersPageContainer, MemberPageContainer, LoginPageContainer, PostConfPageContainer } from './components';
import LoadableAnotherComponent from './components/login/pageContainer'
import { Provider } from 'react-redux';
import { store } from './store';
import Loadable from 'react-loadable';
function MyLoadingComponent() {
  return <div>Loading...</div>;
}
// const LoadableAnotherComponent = Loadable({
//   loader: () => import('./components/login/pageContainer'),
//   LoadingComponent: MyLoadingComponent
// });
export const AppRouter: React.StatelessComponent<{}> = () => {

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login" component={LoadableAnotherComponent}></Route>
          <Route component={App} />
        </Switch>
      </Router>
    </Provider>
  );
}