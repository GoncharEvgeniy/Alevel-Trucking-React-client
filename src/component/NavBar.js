import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <h2>
                <nav>
                    <NavLink exact to="/" > Main </NavLink>
                    <NavLink exact to="/login" > Login </NavLink>
                    <NavLink exact to="/registration" > Registration </NavLink>
                    <NavLink exact to="/home" > Home </NavLink>
                </nav>
            </h2>
        </div>
    );
}

export default NavBar;