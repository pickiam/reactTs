import * as React from 'react'
import { Form, Radio, Input } from 'antd';


export class FormPage extends React.Component {
  render () {
    const { getFieldDecorator } = this.props.form;


    
    return (
      <Form layout="vertical">
        <Form.Item label="Title">
          {getFieldDecorator('title', {
            rules: [{ required: true, message: 'Please input the title of collection!' }],
            initialValue: this.props.detailAdd.name
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item label="Description">
          {getFieldDecorator('description')(<Input type="textarea" />)}
        </Form.Item>
        <Form.Item className="collection-create-form_last-form-item">
          {getFieldDecorator('modifier', {
            initialValue: 'public',
          })(
            <Radio.Group>
              <Radio value="public">Public</Radio>
              <Radio value="private">Private</Radio>
            </Radio.Group>
          )}
        </Form.Item>
      </Form>
    )
  }
}