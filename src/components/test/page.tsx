import * as React from 'react'
// import { Tables as Table} from '../../common/components/table/table'
import { Table, Button, Modal, Divider} from 'antd';
import { CollectionCreateForm, CollectFormFunction } from '../../common/components/page/form';
import { CollectForm } from './form'
import { PicturesWall } from '../../common/components/page/PicturesWall'
import { postConfEntity } from '../../model/postConf'

interface Props<T> {
    columns: Array<T>;
    dataSource: Array<T>;
    detailAdd: postConfEntity;
    fetchData: (pramas: any) => void;
    fetchDetail: (pramas: any) => void;
    fetchDetailClear: () => void;
    deleteData: (pramas: any) => void;
    updateData: (pramas: any) => void;
    addData: (pramas: any) => void;
}
interface State {
    visible: boolean;
    detail: {};
    previewVisible: boolean;
}

export class TestPage extends React.Component<Props<Object>, State> {
    columns: Array<Object>
    state: State
    formRef: any
    constructor(props) {
        super(props)
        this.getTableData = this.getTableData.bind(this);
        this.modalShow = this.modalShow.bind(this)
        this.state = {
            visible: false,
            detail: {},
            previewVisible: false,
        }
        this.columns = [
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                  <span>
                    <a href="javascript:;" onClick={this.modalShow.bind(this, 'edit')}>编辑</a>
                    <Divider type="vertical" />
                    <a href="javascript:;" onClick={this.delete.bind(this, record)}>删除</a>
                  </span>
                ),
            }
        ]
    }
    public componentWillMount() {
        this.getTableData()
    }
    private delete = (pramas: any) => {
        this.props.deleteData(pramas)
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
    private getTableData(pramas: any = {}) {
        this.props.fetchData(pramas)
    }
    private onChange = (pramas: any) => {
        console.log(pramas)
    }
    private handleOk = () => {
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
          if (err) {
            return;
          } else {

          }
          console.log('Received values of form: ', values);
          this.setState({ visible: false });
        });
    }
    private modalShow (pramas: string, record?: string) {
        this.setState({
            visible: true
        })
        if (pramas === 'edit') {
            this.props.fetchDetail(record)
        } {
            this.props.fetchDetailClear()
        }

    }
    private saveFormRef = (formRef) => {
        this.formRef = formRef;
    }
    private handleCancel = () => {
        this.setState({
            visible: false
        })
    }

    public render() {
        const CollectionForm:any = CollectFormFunction(CollectionCreateForm, CollectForm)
        return (
            <div>
                <div className="add-button-container">
                    <Button type="primary" onClick={this.modalShow.bind(this, 'add')} >新增</Button>
                </div>
                <Table bordered dataSource={this.props.dataSource} columns={[...this.props.columns, ...this.columns]} />
                <CollectionForm
                    wrappedComponentRef={this.saveFormRef}
                    detailAdd={this.props.detailAdd}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onOk={this.handleOk}
                >
                </CollectionForm>
            </div>
        )
    }
}