import * as React from 'react'

interface Props {
    name: string;
    label: string;
    placeholder?: string;
    value: string,
    type?: string
    onChange: (fieldName: string, value: string) => void;
    error?: string;
} 

export const Input: React.StatelessComponent<Props> = (props) => {
    return (
        <div>
            <label htmlFor={props.name}>{props.label}</label>
            <div>
                <input type={props.type ? props.type : 'text'}
                    name={props.name}
                    className="form-control"
                    placeholder={props.placeholder}
                    // value={props.value}
                    onChange={onChangeInput(props)}
                />
            </div>
            <div>{props.error}</div>
        </div>
    )
} 

const onChangeInput = (props: Props) => (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.name, e.target.value)
}