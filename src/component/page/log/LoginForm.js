import React from 'react';
import { Field, reduxForm } from 'redux-form';
import inputField from "../../common/InputField";

const LoginForm = (props) => {
    const { handleSubmit, errors } = props;
    let serverErrors = '';
    if (errors !== undefined && errors.error !== undefined) {
        serverErrors = errors.error;
    }
    return(
        <div>
            LoginForm
            <form className="container" onSubmit={handleSubmit}>
                <Field
                    name="username"
                    component={inputField}
                    type="text"
                    label="Username" />
                <Field
                    name="password"
                    component={inputField}
                    type="password"
                    label="Password" />
                <span className="text text-danger">{serverErrors}</span>
                <p/><button className="btn btn-success"
                            type="submit"> Login </button>
            </form>
        </div>
    )
};

export default reduxForm({form: 'loginForm'}) (LoginForm)