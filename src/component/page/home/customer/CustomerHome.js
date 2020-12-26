import React from 'react';
import OrderFrom from "./OrderForm";
import OrdersTable from "./OrdersTable";

const CustomerHome = () => {
    return (
        <div>
            Customer home
            <OrderFrom />
            <OrdersTable />
        </div>
    )
};

export default CustomerHome;