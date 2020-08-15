import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = () => {
    return(
        <div>
            LoginForm
            <form>
                <Field
                    name="userName"
                    component="input"
                    type="text" />
            </form>
        </div>
    )
};

export default reduxForm({form: 'loginForm'}) (LoginForm)