import * as React from 'react';
import { connect } from 'react-redux';
import { customerPage } from './page'
import { State } from '../../reducers';
import { getCusomerData, updateData, addData } from './actions/getData'
import { getDetail, getDetailClear, deleteData } from './actions/getDetail'


const columns = [{
    title: '职位名称',
    dataIndex: 'position',
    key: 'position',
  }, {
    title: '工作地点',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: '岗位职责',
    dataIndex: 'responsibility',
    key: 'responsibility'
  },{
    title: '任职要求',
    dataIndex: 'requirement',
    key: 'requirement',
  }, {
    title: '招聘链接',
    dataIndex: 'link',
    key: 'link'
  }];

const mapStateToProps = (state: State) => ({
    dataSource: state.recruitment.tableData,
    columns: columns,
    detailAdd: state.recruitment.detailData
  });

const mapDispatchToProps = (dispatch) => ({
    fetchData: (pramas: any) => dispatch(getCusomerData(pramas)),
    fetchDetail: (pramas: any) => dispatch(getDetail(pramas)),
    fetchDetailClear: () => dispatch(getDetailClear()),
    deleteData: (pramas: any) => dispatch(deleteData(pramas)),
    updateData: (pramas: any) => dispatch(updateData(pramas)),
    addData: (pramas: any) => dispatch(addData(pramas))
})
  
  export const RecPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(customerPage);