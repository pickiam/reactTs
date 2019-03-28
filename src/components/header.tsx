
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import "antd/dist/antd.css";
import { CurrentPage } from './current'
declare const require: any;
export const Header: React.StatelessComponent = (props) => {
  return (
    <header id="header">
       <Row>
        <Col xs={24} sm={24} md={5} lg={5} xl={4}>
          <a id="logo" href="/">
            <img alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
            <span>车分享管理后台</span>
          </a>
        </Col>
        <Col xs={0} sm={0} md={19} lg={19} xl={20}><CurrentPage {...props}/></Col>
      </Row>
    </header>
  );
}