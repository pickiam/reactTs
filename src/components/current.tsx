import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../reducers';

interface Props {
    currentPath: string;
}
class Current extends React.Component<Props, {}> {
    render () {
        return (
            <div className="current-path">
                当前模块：{ this.props.currentPath }
            </div>
        )
    }
    
}
const mapStateToProps = (state: State, ownProps: any) => ({
    currentPath: state.sider.activeMenuItem.name,
})

const mapDispatchToProps = (dispatch) => ({

})
export const CurrentPage = connect(
    mapStateToProps,
    
)(Current)

