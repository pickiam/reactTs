import * as React from 'react';
import { userEntity } from '../../model'
import { Input , Button } from '../../common/components/form';

interface Props {
    user: userEntity;
    onChange: (fieldName: string, value: string) => void;
    onSave: () => void;
    onClear: () => void;
}

export const LoginForm: React.StatelessComponent<Props> = (props) => {
    return (
        <form className="loginForm">
            <h2>用户登录</h2>
            <Input 
                name="username"
                label="username"
                value={props.user.username}
                onChange={props.onChange}
            />
            <Input
                name="password"
                label="password"
                value={props.user.password}
                onChange={props.onChange}
                type='password'
            />
            <div className="loginForm-button">
                <div style={{float: 'right'}}>
                    <Button 
                        label="登录"
                        className="btn"
                        onClick={props.onSave}
                    />
                    <Button 
                        label="清空"
                        className="btn"
                        onClick={props.onClear}
                    />
                </div> 
            </div>
        </form>
    )
}