import React from 'react';
import {Field} from "redux-form";
import inputField from "./InputField";
import {required} from "../page/validation/FieldValidation";

const Order = () => {
    return (
        <div class="container">
            <div className="row">
                <div className="col-sm form-group">
                    <Field
                        name="name"
                        component={inputField}
                        type="text"
                        label="Name"
                        validate={[required]}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-sm form-group">
                    <Field
                        name="weight"
                        component={inputField}
                        type="text"
                        label="Weight"
                        validate={[required]}
                    />
                </div>
                <div className="col-sm form-group">
                    <Field
                        name="length"
                        component={inputField}
                        type="text"
                        label="Length"
                        validate={[required]}
                    />
                </div>
                <div className="col-sm form-group">
                    <Field
                        name="width"
                        component={inputField}
                        type="text"
                        label="Width"
                        validate={[required]}
                    />
                </div>
                <div className="col-sm form-group">
                    <Field
                        name="height"
                        component={inputField}
                        type="text"
                        label="Height"
                        validate={[required]}
                    />
                </div>
                <div className="col-sm form-group">
                    <Field
                        name="volume"
                        component={inputField}
                        type="text"
                        label="Volume"
                        validate={[required]}
                    />
                </div>
            </div>
        </div>
    )
};

export default Order;