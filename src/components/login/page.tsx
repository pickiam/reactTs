import * as React from 'react';
import { userEntity } from '../../model'
import { LoginForm } from './loginForm'

interface Props {
    user: userEntity;
    onChange: (user: userEntity, fieldName: string, value: string) => void;
    onSave: (user: userEntity) => void;
    onClear: (user: userEntity) => void;
}

export class LoginPage extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this)
    }
    private onChange(fieldName: string, value: string) {
        this.props.onChange(this.props.user, fieldName, value);
      }
    public render() {
        return (
            <LoginForm 
                user={this.props.user}
                onChange={this.onChange}
                onSave={this.props.onSave.bind(this, this.props.user)}
                onClear={this.props.onClear.bind(this, this.props.user)}
            />
        )
    }
}