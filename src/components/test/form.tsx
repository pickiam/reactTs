 
 import * as React from 'react'
 import { FormComponentProps } from 'antd/lib/form';
 import { PicturesWall } from '../../common/components/page/PicturesWall'

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
 interface FormProps extends FormComponentProps{
   detailAdd: any;
 }

 interface State {
  previewVisible: boolean;

 }
export class CollectForm extends React.Component<FormProps, State> {
  constructor(props) {
    super(props)
    this.state = {
      previewVisible: false
    }
  }
  private onPreview = (pramas:any) => {
    this.setState({
        previewVisible: true
    })
  }
  private onCancel = () => {
      this.setState({
          previewVisible: false
      })
  }
  private onChange = (pramas: any) => {
      console.log(pramas)
  }
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
          {getFieldDecorator('description')(<Input.TextArea autosize={true}/>)}
        </Form.Item>
        <Form.Item label="Description">
        <PicturesWall 
                previewVisible={this.state.previewVisible}
                previewImage={this.props.detailAdd.imgList.length ? this.props.detailAdd.imgList[0].url : ''}
                fileList={this.props.detailAdd.imgList}
                onPreview={this.onPreview}
                onChange={this.onChange}
                onCancel={this.onCancel}
                handleRemove={this.onCancel}
            />
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