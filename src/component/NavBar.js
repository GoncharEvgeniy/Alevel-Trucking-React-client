import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = (props) => {

    async function handleLogout() {
        props.logout();
    };

    return (
        <div>
            <h2>
                <nav>
                    <NavLink exact to="/" >| Main |</NavLink>
                    <NavLink exact to="/login" >| Login |</NavLink>
                    <NavLink exact to="/registration" >| Registration |</NavLink>
                    <NavLink exact to="/home" >| Home |</NavLink>
                    <NavLink exact to="/" onClick={() => handleLogout()} >| Logout |</NavLink>
                </nav>
            </h2>
        </div>
    );
};

export default NavBar;