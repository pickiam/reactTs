import * as React from 'react'
import { Upload, Icon, Modal } from 'antd';
import { imgList } from '../../model/postConf'
interface Props {
    previewVisible: boolean;
    previewImage: string;
    fileList: Array<any>;
    onPreview: (pramas: any) => void;
    onChange: (pramas: any) => void;
    onCancel: () => void;
}
export class PicturesWall extends React.Component<Props, {}> {

  handleCancel = () => this.props.onCancel()

  handlePreview = (file) => this.props.onPreview(file)

  handleChange = ({ fileList }) => this.props.onChange(fileList)

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
          action="//jsonplaceholder.typicode.com/posts/"
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 3 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}
