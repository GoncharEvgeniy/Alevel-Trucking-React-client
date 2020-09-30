import React from 'react'
import {Field, reduxForm} from "redux-form";
import inputField from "../../common/InputField";
import {maxLength15, minLength4, minLength5, required} from "../validation/FieldValidation";

const RegistrationForm = (props) => {
    const {handleSubmit, errors} = props;
    /*TODO fix validation for phone*/
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
                        validate={[required, minLength4, maxLength15]}
                    />
                </div>
                <div className="form-group">
                    <Field
                        name="password"
                        component={inputField}
                        type="password"
                        label="Password"
                        validate={[required, minLength5, maxLength15]}
                    />
                </div>
                <div className="form-group">
                    <Field
                        name="email"
                        component={inputField}
                        type="email"
                        label="E-mail"
                        validate={[required]}
                    />
                </div>
                <div className="form-group">
                    <Field
                        name="firstName"
                        component={inputField}
                        type="text"
                        label="First name"
                        validate={[required]}
                    />
                </div>
                <div className="form-group">
                    <Field
                        name="secondName"
                        component={inputField}
                        type="text"
                        label="Second name"
                        validate={[required]}
                    />
                </div>
                <div className="form-group">
                    <Field
                        name="lastName"
                        component={inputField}
                        type="text"
                        label="Last name"
                        validate={[required]}
                    />
                </div>
                <div className="form-group">
                    <Field
                        name="phone"
                        component={inputField}
                        type="tel"
                        label="Phone"
                        validate={[required]}
                    />
                </div>
                <div>
                    <button className="btn btn-success"
                            type="submit"> Registration
                    </button>
                </div>
            </form>
        </div>
    )
};

export default reduxForm({form: 'registrationForm'})(RegistrationForm)