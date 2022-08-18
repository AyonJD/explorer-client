import { faCalendarPlus, faCartArrowDown, faListCheck, faMagnifyingGlass, faUser, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from 'react-router-dom';
import { articleDataContext } from '../../App';

const Dashboard = () => {
    // const [user] = useAuthState(auth)
    // const [admin] = useAdmin(user)
    const valueObj = useContext(articleDataContext)
    // let admin = (valueObj?.signedInUser?.admin)
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content pl-1">
                <Outlet />
            </div>
            <div className="drawer-side  h-[100vh]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto lg:w-56 w-56  bg-neutral text-warning py-10 ">
                    {/* <!-- Sidebar content here --> */}


                   <li className='mb-2'><NavLink to={'/dashboard/overview'}><FontAwesomeIcon icon={faListCheck} /> Overview</NavLink></li>

                   <li className='mb-2'><NavLink to={'/dashboard/analytics'}><FontAwesomeIcon icon={faListCheck} /> Analytics</NavLink></li>

                    <li className='mb-2'><NavLink to={'/dashboard/admin-rules'}><FontAwesomeIcon icon={faListCheck} /> Admin Rules</NavLink></li>

                    <li className='mb-2'><NavLink to={'/dashboard/premium-member'}><FontAwesomeIcon icon={faListCheck} /> Premium Member</NavLink></li>

                    <li className='mb-2'><NavLink to={'/dashboard/manage-user'}><FontAwesomeIcon icon={faListCheck} /> Manage Users</NavLink></li>

                    <li className='mb-2'><NavLink to={'/dashboard/manage-article'}><FontAwesomeIcon icon={faListCheck} /> Manage Article</NavLink></li>

                    <li className='mb-2'><NavLink to={'/dashboard/post-Article'}><FontAwesomeIcon icon={faCalendarPlus} /> Post Article</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;