import * as React from 'react';
import { connect } from 'react-redux';
import { postConfEntity } from '../../model';
// import { FormPage } from './form'
import { FomPage } from './page'
import { State } from '../../reducers';
import { getPostConfData } from './actions/getPostConfData'
import { getPostConfDetail, getPostConfDetailClear, deletePostConfData } from './actions/getPostConfDetail'
import { Page } from '../../common/components/page'


const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  }];

const mapStateToProps = (state: State) => ({
    dataSource: state.postConfs.tableData,
    columns: columns,
    components: FomPage,
    detailAdd: state.postConfs.detailData
  });

const mapDispatchToProps = (dispatch) => ({
    fetchData: (pramas: any) => dispatch(getPostConfData(pramas)),
    fetchDetail: (pramas: any) => dispatch(getPostConfDetail(pramas)),
    fetchDetailClear: () => dispatch(getPostConfDetailClear()),
    deleteData: (pramas: any) => dispatch(deletePostConfData(pramas))
})
  
  export const TestPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Page);