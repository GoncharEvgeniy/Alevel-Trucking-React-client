import React from 'react';

const UsersTable = (props) => {
    console.log(props.users);
    let userRows = props.users.map(
        user => {
            return (
                <tr>
                    <td>{user.id}</td>
                    <td>{user.login}</td>
                    <td>{user.firstName}</td>
                    <td>{user.secondName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.role}</td>
                </tr>
            )
        }
    );
    return (
        <div>
            Users Table
            <table  class="table table-bordered table-sm">
                <thead>
                    <th>ID</th>
                    <th>Login</th>
                    <th>First name</th>
                    <th>Second name</th>
                    <th>Last name</th>
                    <th>E-mail</th>
                    <th>Phone</th>
                    <th>Role</th>
                </thead>
                <tbody>
                    {userRows}
                </tbody>
            </table>
        </div>
    )
};

export default UsersTable;