import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../reducers';

interface Props {
    currentPath: string;
}
const Current: React.StatelessComponent<Props> = (props) => {
    return (
        <div className="current-path">
            当前位置：{ props.currentPath }
        </div>
    )
}
const mapStateToProps = (state: State, ownProps: any) => ({
    currentPath: state.sider.activeMenuItem ? state.sider.activeMenuItem : state.sider.siderItem.length ? state.sider.siderItem[0].name : '',
})

export const CurrentPage = connect(
    mapStateToProps,
    
)(Current)

