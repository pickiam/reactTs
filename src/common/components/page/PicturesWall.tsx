import * as React from 'react'
import { Upload, Icon, Modal } from 'antd';
import * as $ from 'jquery'
// import { imgList } from '../../model/postConf'
interface Props {
    previewVisible: boolean;
    previewImage: string;
    fileList: Array<any>;
    onPreview: (pramas: any) => void;
    onChange: (pramas: any) => void;
    onCancel: () => void;
    handleRemove: () => void;
}
export class PicturesWall extends React.Component<Props, {}> {

  handleCancel = () => this.props.onCancel()

  handlePreview = (file) => this.props.onPreview(file)
  handleRemove = (pramas) => {
    this.props.handleRemove()
  }
  handleChange = (fileList) => this.props.onChange(fileList)
  uploadPic = (pramas)  => {
    const url = "http://static.cacxtravel.com/upload/up.do?app=changango"
    let formData = new FormData()
    let _that = this
    formData.append('file', pramas.file)
    $.ajax({
      url: url,
      type: 'post',
      data: formData,
      cache: false,
      contentType: false,
      processData: false,
      success: function (data) {
        if (data.success) {
          console.log(data)
         _that.handleChange(data.url)
        }
      }
    })
  }
  render() {
    const { previewVisible, previewImage, fileList } = this.props;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Upload
          // action="http://static.cacxtravel.com/upload/up.do"
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onRemove={this.handleRemove}
          customRequest={this.uploadPic}
        >
          {fileList.length >= 1 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="preview" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}
