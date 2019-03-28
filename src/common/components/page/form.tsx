
  
 
  
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
     component: any;
     onChange: (pramas: any) => void;
 }
 interface FormProps extends FormComponentProps{
   detailAdd: any;
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
             const WrapChildComponent = this.props.component;
         return (
           <Modal
             visible={this.props.visible}
             title="信息"
             okText="保存"
             cancelText="取消"
             onCancel={this.onCancel}
             onOk={this.onCreate}
           >
             <WrapChildComponent  detailAdd={this.props.detailAdd} form={this.props.form}/>
           </Modal>
         );
       }
     }
   );
  export const CollectFormFunction = (WrapComponent, WrapChildComponent) => {
    return class extends React.Component<Props, {}> {
      render () {
        return (
          <WrapComponent {...this.props} component={WrapChildComponent}></WrapComponent>
        )
      }
    }
  }
  export const CollectForm: React.StatelessComponent<FormProps> = (props) => {
    const { getFieldDecorator } = props.form;
    return (
      <Form layout="vertical">
        <Form.Item label="Title">
          {getFieldDecorator('title', {
            rules: [{ required: true, message: 'Please input the title of collection!' }],
            initialValue: props.detailAdd.name
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item label="Description">
          {getFieldDecorator('description')(<Input.TextArea autosize={true}/>)}
        </Form.Item>
        <Form.Item label="图片配置">
          { props.children }
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
   
  