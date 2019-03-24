
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import "antd/dist/antd.css";

declare const require: any;
export const Header: React.StatelessComponent<{}> = () => {
  return (
    <header id="header">
       <Row>
        <Col xs={24} sm={24} md={5} lg={5} xl={4}>
          <a id="logo" href="/index-cn">
            <img alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
            <img alt="Ant Design" src="https://gw.alipayobjects.com/zos/rmsportal/DkKNubTaaVsKURhcVGkh.svg" />
          </a>
        </Col>
        <Col xs={0} sm={0} md={19} lg={19} xl={20}></Col>
      </Row>
    </header>
  );
}