import React from 'react'
import RegistrationForm from "./ReristrationForm";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {register} from "../../../action/SecurityAction";

const Registration = (props) => {

    async function handleRegister(values) {
        props.register(values);
    }
    /*TODO fix style*/
    return(
        <div>
            <h3>Register now</h3>
            <div>
                <RegistrationForm onSubmit={handleRegister} errors={props.errors}/>
            </div>
        </div>
    )
};

Registration.propTypes = {
    register: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        errors: state.security.errors
    };
};

export default connect(mapStateToProps, { register })(Registration)