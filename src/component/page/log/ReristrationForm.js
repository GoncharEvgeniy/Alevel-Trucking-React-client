import React from 'react'
import {Field, reduxForm} from "redux-form";
import inputField from "../../common/InputField";
import {maxLength15, minLength6, required} from "../validation/FieldValidation";

const RegistrationForm = (props) => {
    const {handleSubmit, errors} = props;
    /*TODO fix validation*/
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
                        validate={[required, maxLength15, minLength6]}
                    />
                </div>
                <div className="form-group">
                    <Field
                        name="secondName"
                        component={inputField}
                        type="text"
                        label="Second name"
                        validate={[required, maxLength15, minLength6]}
                    />
                </div>
                <div className="form-group">
                    <Field
                        name="lastName"
                        component={inputField}
                        type="text"
                        label="Last name"
                        validate={[required, maxLength15, minLength6]}
                    />
                </div>
                <div className="form-group">
                    <Field
                        name="phone"
                        component={inputField}
                        type="text"
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