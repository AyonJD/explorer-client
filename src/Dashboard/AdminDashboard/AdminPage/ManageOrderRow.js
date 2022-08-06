import React from 'react';

const ManageOrderRow = ({ order, index }) => {
    console.log(order.paid);
    return (
        <tr>
            <th>{++index}</th>
            <th>{order.product}</th>
            <td>
                <div className="avatar flex items-center ">
                    <div className="w-16 rounded-xl">
                        <img style={{ width: '100%' }} src={order.img} alt='' />
                    </div>
                </div></td>
            <td> {order.quantity} Pcs</td>
            <td>{order.totalPrice} $</td>
            <td>
                {
                    order.paid ? <button className='btn btn-xs btn-success'>Paid</button> : <button className='btn btn-xs btn-error'>UnPAID</button>
                }
            </td>

            <td>
                {
                    order.paid ? <button className='btn btn-xs btn-success'>Shipped</button> : <button className='btn btn-xs btn-error'>pending</button>
                }
            </td>
        </tr>
    );
};

export default ManageOrderRow;