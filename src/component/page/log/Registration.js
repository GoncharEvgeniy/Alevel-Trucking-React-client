import React from 'react'
import RegistrationForm from "./ReristrationForm";
import {connect} from "react-redux";

const Registration = (props) => {

    async function handleRegister(values) {
        console.log(values);
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

const mapStateToProps = (state) => {
    return {
        errors: state.security.errors
    };
};

export default connect(mapStateToProps)(Registration)