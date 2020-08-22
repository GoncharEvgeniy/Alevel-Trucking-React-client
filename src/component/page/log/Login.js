import React from 'react'
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import PropTypes from 'prop-types';

const Login = (props) => {

    async function handleLogin(values) {
        console.log(values);
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

/*Login.propTypes = {
    login: PropTypes.func.isRequired
}*/

export default connect()(Login)