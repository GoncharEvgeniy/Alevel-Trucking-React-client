import React from 'react';
import {Field} from "redux-form";
import inputField from "./InputField";
import {required} from "../page/validation/FieldValidation";

const Address = () => {
    return (
        <div class="container">
            <div className="row">
                <div className="col-sm form-group">
                    <Field
                        name="city"
                        component={inputField}
                        type="text"
                        label="City"
                        validate={[required]}
                    />
                </div>
                <div className="col-sm form-group">
                    <Field
                        name="street"
                        component={inputField}
                        type="text"
                        label="Street"
                        validate={[required]}
                    />
                </div>
                <div className="col-sm form-group">
                    <Field
                        name="building"
                        component={inputField}
                        type="text"
                        label="Building"
                        validate={[required]}
                    />
                </div>
                <div className="col-sm form-group">
                    <Field
                        name="apex"
                        component={inputField}
                        type="text"
                        label="Apex"
                        validate={[required]}
                    />
                </div>
            </div>
        </div>
    )
};

export default Address;