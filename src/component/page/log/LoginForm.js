import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
    const { handleSubmit, errors } = props;
    let serverErrors = '';
    if (errors !== undefined && errors.error !== undefined) {
        serverErrors = errors.error;
    }
    return(
        <div>
            LoginForm
            {serverErrors}
            <form onSubmit={handleSubmit}>
                <Field
                    name="username"
                    component="input"
                    type="text" />
                <Field
                    name="password"
                    component="input"
                    type="password" />
                <p/><button type="submit"> Login </button>
            </form>
        </div>
    )
};

export default reduxForm({form: 'loginForm'}) (LoginForm)