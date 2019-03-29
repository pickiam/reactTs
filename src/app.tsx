import * as React from 'react';
import { Header } from './components';
import { Row, Col } from 'antd';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import {  PostConfPageContainer, SiderPageContainer, CurrentPage, MemberPageContainer, TestPageContainer, CustomerPageContainer, introductionPageContainer, RecPageContainer} from './components';
export const App: React.StatelessComponent<{}> = (props) => {
  return (
    <div className="container-fluid" >
      <Header />
      <div className="main-container">
        <Row gutter={16}>
          <Col span={3}>
            <SiderPageContainer {...props}/>
          </Col>
          <Col span={21} style={{marginTop: "20px"}}>
            {/* <CurrentPage/> */}
            <Switch>
                <Route exact path="/" component={RecPageContainer} />
                <Route path="/introduction" component={introductionPageContainer} />
                <Route path="/customer" component={CustomerPageContainer} />
            </Switch>
          </Col>    
        </Row>
      </div>
    </div>
  );
}
