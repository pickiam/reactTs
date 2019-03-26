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
export const CollectionCreateForm:any = Form.create({ })(
    // eslint-disable-next-line
    class extends React.Component<Props, {}> {
        private onCancel = () => {
            this.props.onCancel()
        }
        private onCreate = () => {
            this.props.onOk()
        }

        render() {
            return (
              <Modal
                visible={this.props.visible}
                title="Create a new collection"
                okText="Create"
                onCancel={this.onCancel}
                onOk={this.onCreate}
              >
              {this.props.children}
              </Modal>
            );
      }
    }
  );
  
 
  
 