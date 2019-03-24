import * as React from 'react'
import { FormComponentProps } from 'antd/lib/form';

import {
    Button, Modal, Form, Input, Radio,
  } from 'antd';

interface Props extends FormComponentProps {
    detailAdd: any;
    visible: boolean;
    title?: string;
    onCancel: () => void;
    onOk: () => void;
} 
export const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
    // eslint-disable-next-line
    class extends React.Component<Props, {}> {
        private onCancel = () => {
            this.props.onCancel()
        }
        private onCreate = () => {
            this.props.onOk()
        }

        render() {
            const { getFieldDecorator } = this.props.form;
        return (
          <Modal
            visible={this.props.visible}
            title="Create a new collection"
            okText="Create"
            onCancel={this.onCancel}
            onOk={this.onCreate}
          >
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
          </Modal>
        );
      }
    }
  );
  
 
  
 