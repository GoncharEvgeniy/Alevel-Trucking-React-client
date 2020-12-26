import React from 'react';
import CustomerHome from "./customer/CustomerHome";
import ManagerHome from "./manager/ManagerHome";
import DriverHome from "./driver/DriverHome";
import AdminHome from "./admin/AdminHome_";

const Home = () => {
    return (
        <div>
            HOME
            <div>
                <CustomerHome />
 {/*               <ManagerHome />
                <DriverHome />
                <AdminHome />            */}
            </div>
        </div>
    )
};

export default Home;