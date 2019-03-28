 
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
        <Form.Item label="介绍标题">
          {getFieldDecorator('title', {
            rules: [{ required: true, message: '请输入' }],
            initialValue: this.props.detailAdd.title
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item label="介绍内容">
          {getFieldDecorator('content', {
            rules: [{ required: true, message: '请输入!' }],
            initialValue: this.props.detailAdd.content
          })(<Input.TextArea autosize={true}/>)}
        </Form.Item>
        <Form.Item label="介绍背景">
        <PicturesWall 
                previewVisible={this.state.previewVisible}
                previewImage={this.state.fileList.length ? this.state.fileList[0].url : ''}
                fileList={this.state.fileList}
                onPreview={this.onPreview}
                onChange={this.onChange}
                onCancel={this.onCancel}
                handleRemove={this.onRemove}
            />
      </Form.Item>
      <Form.Item label="图标地址">
          {getFieldDecorator('background', {
            rules: [{ required: true, message: '请输入!' }],
            initialValue: this.state.fileList.length ? this.state.fileList[0].url : ''
          })(<Input disabled={true} />)}
        </Form.Item>
      </Form>
    )
  }

}