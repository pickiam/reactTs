import * as React from 'react';
import { connect } from 'react-redux';
import { saveUserAction } from './actions/saveUser'
import { userEntity } from '../../model';
import { LoginPage } from './page'
import { State } from '../../reducers';
import { userFieldChangeAction } from './actions/changeUserField';


const mapStateToProps = (state: State, props) => ({
    user: state.user,
})
const mapDispatchToProps = (dispatch) => ({
    onSave: (user: userEntity) => dispatch(saveUserAction(user)),
    onClear: (user: userEntity) => dispatch(saveUserAction(user)),
    onChange: (user: userEntity, fieldName: string, value: string) => 
        dispatch(userFieldChangeAction(user, fieldName, value))
})
 const LoginPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(LoginPage);

export default LoginPageContainer;