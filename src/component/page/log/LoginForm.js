import React from 'react';
import {Field, reduxForm} from 'redux-form';
import inputField from "../../common/InputField";

const required = value =>
    value
        ? undefined
        : 'Required';

const maxLength = max => value =>
    value && (value.length > max)
        ? `Must be ${max} characters or less`
        : undefined;

const maxLength15 = maxLength(15); // TODO double check

const minLength = min => value =>
    value && value.length < min
        ? `Must be ${min} characters or more`
        : undefined;

const minLength6 = minLength(6);


const LoginForm = (props) => {
    const {handleSubmit, errors} = props;
    let serverErrors = '';
    if (errors !== undefined && errors.error !== undefined) {
        serverErrors = errors.error;
    }
    return (
        <div>
            LoginForm
            <form className="container" onSubmit={handleSubmit}>
                <div className="form-group">
                    <Field
                        name="username"
                        component={inputField}
                        type="text"
                        label="Username"
                        validate={[required, maxLength15, minLength6]}
                    />
                </div>
                <div className="form-group">
                    <Field
                        name="password"
                        component={inputField}
                        type="password"
                        label="Password"
                        validate={[required, maxLength15, minLength6]}
                    />
                </div>
                <span className="text text-danger">{serverErrors}</span>
                <button className="btn btn-success"
                        type="submit"> Login
                </button>
            </form>
        </div>
    )
};

export default reduxForm({form: 'loginForm'})(LoginForm)