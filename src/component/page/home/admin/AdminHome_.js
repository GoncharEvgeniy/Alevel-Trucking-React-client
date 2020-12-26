import React, {useEffect} from 'react';
import UsersTable from "./UsersTable";
import PropTypes from "prop-types";
import {getUsers} from "../../../../action/AdminAction";
import {connect} from "react-redux";

const AdminHome = (props) => {

    useEffect(() => {
        props.getUsers();
        },
        []
    );

    return (
        <div>
            Admin home
            <div>
                <UsersTable users={props.usersFromDatabase} />
            </div>
        </div>
    )
};

AdminHome.propTypes = {
    getUsers: PropTypes.func.isRequired,
    users: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        usersFromDatabase: state.admin.usersFromDatabase
    }
};

export default connect(mapStateToProps, {getUsers}) (AdminHome)