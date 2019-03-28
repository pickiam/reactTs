 
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
  fileList: any

 }
export class CollectForm extends React.Component<FormProps, State> {
  constructor(props) {
    super(props)
    this.state = {
      previewVisible: false,
      fileList: this.props.detailAdd.background ? [
        {
            uid: '-1',
            name: 'xxx.png',
            status: 'done',
            url: this.props.detailAdd.background,
            size: '500',
            type: 'png'
        }
    ] : []
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
  private onRemove = () => {
    this.setState({
      fileList: []
    })
  }
  private onChange = (pramas: any) => {
     this.setState({
       fileList: [
        {
            uid: '-1',
            name: 'xxx.png',
            status: 'done',
            url: pramas,
            size: '500',
            type: 'png'
        }
    ]
     })
  }
  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="vertical">
        <Form.Item label="岗位名称">
          {getFieldDecorator('position', {
            rules: [{ required: true, message: '请输入' }],
            initialValue: this.props.detailAdd.position
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item label="工作地点">
          {getFieldDecorator('address', {
            rules: [{ required: true, message: '请输入!' }],
            initialValue: this.props.detailAdd.address
          })(<Input />)}
        </Form.Item>
        {/* <Form.Item label="介绍背景">
        <PicturesWall 
                previewVisible={this.state.previewVisible}
                previewImage={this.state.fileList.length ? this.state.fileList[0].url : ''}
                fileList={this.state.fileList}
                onPreview={this.onPreview}
                onChange={this.onChange}
                onCancel={this.onCancel}
                handleRemove={this.onRemove}
            />
      </Form.Item> */}
      <Form.Item label="岗位职责">
          {getFieldDecorator('responsibility', {
            rules: [{ required: true, message: '请输入!' }],
            initialValue: this.props.detailAdd.responsibility
          })(<Input.TextArea />)}
        </Form.Item>
      <Form.Item label="任职要求">
        {getFieldDecorator('requirement', {
          rules: [{ required: true, message: '请输入!' }],
          initialValue: this.props.detailAdd.requirement
        })(<Input.TextArea />)}
      </Form.Item>
      <Form.Item label="招聘链接">
        {getFieldDecorator('link', {
          rules: [{ required: true, message: '请输入!' }],
          initialValue: this.props.detailAdd.link
        })(<Input />)}
      </Form.Item>
      </Form>
    )
  }

}