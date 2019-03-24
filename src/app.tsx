import * as React from 'react';
import { Header } from './components';
import { Row, Col } from 'antd';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import { LoginPageContainer, PostConfPageContainer, SiderPageContainer, CurrentPage, MemberPageContainer, TestPageContainer} from './components';
export const App: React.StatelessComponent<{}> = (props) => {
  return (
    <div className="container-fluid" >
      <Header />
      <div className="main-container">
        <Row gutter={16}>
          <Col span={3}>
            <SiderPageContainer />
          </Col>
          <Col span={21}>
            <CurrentPage/>
            <Switch>
                <Route exact path="/" component={PostConfPageContainer} />
                <Route path="/about" component={TestPageContainer} />
            </Switch>
          </Col>    
        </Row>
      </div>
    </div>
  );
}
