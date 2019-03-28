import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../reducers';
import { getSiderItemData } from './actions/getSiderItem';
import { Sider } from './sider';
import { changeSiderItem } from './actions/changeSider';



const mapStateToProps = (state: State, ownProps) => ({
  menuItemLabel: state.sider.siderItem,
  defaultSelectedKeys: [ownProps.location.pathname],
  ownProps: ownProps
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (item: any) => dispatch(changeSiderItem(item)),
  getMenuItem: () => dispatch(getSiderItemData()),
});

export const SiderPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sider);
