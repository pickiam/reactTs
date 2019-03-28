import * as React from 'react';
import { connect } from 'react-redux';
import { customerPage } from './page'
import { State } from '../../reducers';
import { getCusomerData, updateData, addData } from './actions/getData'
import { getDetail, getDetailClear, deleteData } from './actions/getDetail'


const columns = [{
    title: '客户名称',
    dataIndex: 'customerName',
    key: 'customerName',
  }, {
    title: '客户图标',
    dataIndex: 'customerIcon',
    key: 'customerIcon',
  }, {
    title: '客户评价',
    dataIndex: 'customerEvaluation',
    key: 'customerEvaluation',
  }];

const mapStateToProps = (state: State) => ({
    dataSource: state.customer.tableData,
    columns: columns,
    detailAdd: state.customer.detailData
  });

const mapDispatchToProps = (dispatch) => ({
    fetchData: (pramas: any) => dispatch(getCusomerData(pramas)),
    fetchDetail: (pramas: any) => dispatch(getDetail(pramas)),
    fetchDetailClear: () => dispatch(getDetailClear()),
    deleteData: (pramas: any) => dispatch(deleteData(pramas)),
    updateData: (pramas: any) => dispatch(updateData(pramas)),
    addData: (pramas: any) => dispatch(addData(pramas))
})
  
  export const CustomerPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(customerPage);