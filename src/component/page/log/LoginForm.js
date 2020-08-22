import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
    const { handleSubmit } = props;
    return(
        <div>
            LoginForm
            <form onSubmit={handleSubmit}>
                <Field
                    name="userName"
                    component="input"
                    type="text" />
                <button type="submit"> Login </button>
            </form>
        </div>
    )
};

export default reduxForm({form: 'loginForm'}) (LoginForm)