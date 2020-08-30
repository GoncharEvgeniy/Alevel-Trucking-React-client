import React from 'react';
import {Field, reduxForm} from 'redux-form';
import inputField from "../../common/InputField";
import {required, maxLength15, minLength6} from "../validation/FieldValidation";

const LoginForm = (props) => {
    const {handleSubmit, errors} = props;
    let serverErrors = '';
    if (errors !== undefined && errors.error !== undefined) {
        serverErrors = errors.error;
    }
    return (
        <div>
            <form className="container" onSubmit={handleSubmit}>
                <span className="text text-danger">{serverErrors}</span>
                <div className="form-group">
                    <Field
                        name="username"
                        component={inputField}
                        type="text"
                        label="Username"
                        validate={[required]}
                    />
                </div>
                <div className="form-group">
                    <Field
                        name="password"
                        component={inputField}
                        type="password"
                        label="Password"
                        validate={[required]}
                    />
                </div>
                <div>
                    <button className="btn btn-success"
                            type="submit"> Login
                    </button>
                </div>
            </form>
        </div>
    )
};

export default reduxForm({form: 'loginForm'})(LoginForm)