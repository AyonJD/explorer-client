
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import ManageOrderRow from './ManageOrderRow';

const ManageOrders = () => {

    const { data: orders, isLoading, refetch } = useQuery('users', () =>
        fetch('https://sheltered-taiga-12711.herokuapp.com/orders', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
    )
    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h2 className='text-2xl font-bold my-5'>Total Order: {orders?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Payment</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <ManageOrderRow
                                key={order._id}
                                order={order}
                                index={index}
                            ></ManageOrderRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;