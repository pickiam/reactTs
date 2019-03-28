import * as React from 'react';
import { connect } from 'react-redux';
import { customerPage } from './page'
import { State } from '../../reducers';
import { getCusomerData, updateData, addData } from './actions/getData'
import { getDetail, getDetailClear, deleteData } from './actions/getDetail'


const columns = [{
    title: '介绍标题',
    dataIndex: 'title',
    key: 'title',
  }, {
    title: '介绍背景',
    dataIndex: 'background',
    key: 'background',
  }, {
    title: '介绍内容',
    dataIndex: 'content',
    key: 'content',
  }];

const mapStateToProps = (state: State) => ({
    dataSource: state.introduction.tableData,
    columns: columns,
    detailAdd: state.introduction.detailData
  });

const mapDispatchToProps = (dispatch) => ({
    fetchData: (pramas: any) => dispatch(getCusomerData(pramas)),
    fetchDetail: (pramas: any) => dispatch(getDetail(pramas)),
    fetchDetailClear: () => dispatch(getDetailClear()),
    deleteData: (pramas: any) => dispatch(deleteData(pramas)),
    updateData: (pramas: any) => dispatch(updateData(pramas)),
    addData: (pramas: any) => dispatch(addData(pramas))
})
  
  export const introductionPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(customerPage);