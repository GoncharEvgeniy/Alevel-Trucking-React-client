import React from 'react'
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {login} from "../../../action/SecurityAction";

const Login = (props) => {

    async function handleLogin(values) {
        props.login(values);
    }

    // TODO fix style
    return(
        <div>
            <h3>Welcome!</h3>
            <div>
                <LoginForm onSubmit={handleLogin} errors={props.errors}/>
            </div>
        </div>
    )
};

Login.propTypes = {
    login: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        errors: state.security.errors
    };
};

export default connect(mapStateToProps, { login })(Login)