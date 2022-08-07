import React from 'react';
import { useNavigate } from 'react-router-dom';

const GetPremium = () => {
    const navigate = useNavigate();
    return (
        <div className='h-[100vh] text-center'>
            <button onClick={() => navigate(``)} className='btn btn-primary btn-outline mt-32'>Get This Membership</button>
        </div>
    );
};

export default GetPremium;