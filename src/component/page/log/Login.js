import React from 'react'
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {login} from "../../../action/SecurityAction";

const Login = (props) => {

    async function handleLogin(values) {
        console.log(values);
        props.login(values);
    }

    return(
        <div>
            LOGIN
            <div>
                <LoginForm onSubmit={handleLogin}/>
            </div>
        </div>
    )
};

Login.propTypes = {
    login: PropTypes.func.isRequired
}

export default connect(undefined, { login })(Login)