import React from 'react';
import {Field, reduxForm} from "redux-form";
import Address from "../../../common/Address";
import Order from "../../../common/Order";

const OrderFrom = () => {
    return (
        <div>
            New order
            <form className="container">
                <div>
                    Route:
                    <div>
                        From:
                        <Address />
                    </div>
                    <div>
                        To:
                        <Address />
                    </div>
                </div>
                <div>
                    Order:
                    <Order />
                </div>
                <div>
                    <button className="btn btn-success"
                            type="submit"> Отправить
                    </button>
                </div>
            </form>
        </div>
    )
};

export default reduxForm({form: 'orderForm'}) (OrderFrom);