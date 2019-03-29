import {
    Form, Row, Col, Input, Button, Icon,
  } from 'antd';
  import * as React from 'react'
  import { FormComponentProps } from 'antd/lib/form';

interface searchFromProps extends  FormComponentProps{
    searchItemList: any;
    handleSearch: (pramas?: any) => void;
}

  class AdvancedSearchForm extends React.Component<searchFromProps>{
    getFields() {
      const { getFieldDecorator } = this.props.form;
      const children = [];
      for (let i = 0; i < this.props.searchItemList.length; i++) {
        children.push(
          <Col span={6} key={i} style={{ display: 'flex' }}>
            <Form.Item label={`${this.props.searchItemList[i][Object.keys(this.props.searchItemList[i])[0]]}`}>
              {getFieldDecorator(`${Object.keys(this.props.searchItemList[i])[0]}`, {
              })(
                <Input placeholder="请输入" />
              )}
            </Form.Item>
          </Col>
        );
      }
      return children;
    }
  
    handleSearch = (e) => {
      e.preventDefault();
      this.props.handleSearch(this.props.form.getFieldsValue())
    //   this.props.form.getFieldsValue()
    }
  
    handleReset = () => {
      this.props.form.resetFields();
    }
  
    render() {
      return (
        <Form
          className="ant-advanced-search-form"
          onSubmit={this.handleSearch}
        >
          <Row gutter={24}>{this.getFields()}
            <Col span={6} style={{ textAlign: 'right' }}>
              <Button  type="primary" htmlType="submit">搜索</Button>
              <Button  style={{ marginLeft: 8 }} onClick={this.handleReset}>
                清空
              </Button>
            </Col>
        </Row>
        </Form>
      );
    }
  }
  
  export const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(AdvancedSearchForm);
