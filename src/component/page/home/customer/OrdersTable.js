import React from 'react';

const OrdersTable = () => {
    return (
        <div>
            Orders
            {/*    Mock  */}
            <table class="table table-bordered table-sm">
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th colSpan={4}>From</th>
                    <th colSpan={4}>TO</th>
                    <th>Weight</th>
                    <th>Length</th>
                    <th>Width</th>
                    <th>Height</th>
                    <th>Volume</th>
                </thead>
                <tbody>
                    <td>ID</td>
                    <td>Name</td>
                    <td>City</td>
                    <td>Address</td>
                    <td>Building</td>
                    <td>Apex</td>
                    <td>City</td>
                    <td>Address</td>
                    <td>Building</td>
                    <td>Apex</td>
                    <td>weight</td>
                    <td>length</td>
                    <td>width</td>
                    <td>height</td>
                    <td>volume</td>
                </tbody>
            </table>
        </div>
    )
};

export default OrdersTable;