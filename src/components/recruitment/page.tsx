import * as React from 'react'
// import { Tables as Table} from '../../common/components/table/table'
import { Table, Button, Modal, Divider} from 'antd';
import { CollectionCreateForm, CollectFormFunction } from '../../common/components/page/form';
import { CollectForm } from './form'
import { PicturesWall } from '../../common/components/page/PicturesWall'
import { WrappedAdvancedSearchForm } from '../../common/components/page/searchForm'

import { recruitmentEntity } from '../../model/recruitmentEntity'

interface Props<T> {
    columns: Array<T>;
    dataSource: Array<T>;
    detailAdd: recruitmentEntity;
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
    searchItemList: any;
    addEdit: string;
    recordId: number
}

export class customerPage extends React.Component<Props<Object>, State> {
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
            searchItemList: [{
                'position': '岗位名称'
            }],
            addEdit: 'edit',
            recordId: 0
        }
        this.columns = [
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                  <span>
                    <a href="javascript:;" onClick={this.modalShow.bind(this, 'edit', record)}>编辑</a>
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
        // console.log(pramas)
        this.props.deleteData(pramas.id)
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
              if (this.state.addEdit === 'edit') {
                  this.props.updateData(Object.assign(values, {id: this.state.recordId}))
              } else {
                this.props.addData(values)
              }
          }
    
        //   console.log('Received values of form: ', values);
          form.resetFields();
          this.setState({ visible: false });
        });
    }
    handleSearch = (pramas: any) => {
        this.getTableData(pramas)
    }
    private modalShow (pramas: string, record?: any) {
        if (pramas === 'edit') {
            this.setState({
                addEdit: pramas,
                recordId: record.id,
                visible: true
            })
            this.props.fetchDetail(record.id)
            
        } else {
            this.setState({
                visible: true,
                addEdit: pramas,
                recordId: 0
            })
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
                <WrappedAdvancedSearchForm searchItemList={this.state.searchItemList} handleSearch={this.handleSearch}/>
                <div className="add-button-container">
                    <Button type="primary" onClick={this.modalShow.bind(this, 'add')}>新增</Button>
                </div>
                <Table bordered dataSource={this.props.dataSource} columns={[...this.props.columns, ...this.columns]} rowKey="id"/>
                <CollectionForm
                    wrappedComponentRef={this.saveFormRef}
                    detailAdd={this.props.detailAdd}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onOk={this.handleOk}
                    onChange={this.onChange}
                >
                </CollectionForm>
            </div>
        )
    }
}