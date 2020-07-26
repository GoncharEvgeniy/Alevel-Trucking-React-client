import React from 'react';
import CustomerHome from "./CustomerHome";
import ManagerHome from "./ManagerHome";
import DriverHome from "./DriverHome";
import AdminHome from "./AdminHome_";

const Home = () => {
    return (
        <div>
            HOME
            <div>
                <CustomerHome />
                <ManagerHome />
                <DriverHome />
                <AdminHome />
            </div>
        </div>
    )
};

export default Home;