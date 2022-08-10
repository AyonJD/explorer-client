import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
    Elements
} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { useParams } from 'react-router-dom';
import './PaymentCard.css';

const stripePromise = loadStripe('pk_test_51L3PqJCnJiLLpGIeL4Uixr7K4bJ183L3tSUyFg2ENBX5ovRQKSQhaYTR8kG7WbcfvkvyuLa5RfB9eZlBJfohfpYd00PM7gqopw');
const PaymentCard = () => {
    const { id } = useParams();
    const [membershipPlan, setMembershipPlan] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/membership-plans/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setMembershipPlan(data);
            }).catch((err) => {
                console.log(err);
            });
    }, [id]);

    return (
        <div className="Payment_card mx-auto container md:mb-0 mb-10">
            <div className='grid grid-cols-1 md:grid-cols-2 mt-10'>
                <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                    <div className="card-body">
                        <p className=" font-bold text-4xl sp-style">Hey, name here
                        </p>
                        <h2 className="sp-style text-2xl ">
                            Please Pay for purchasing :- <span className="">Membership name here</span>
                        </h2>

                        <p className="text-xl sp-style font-bold">Please pay First: $Price here</p>
                    </div>
                </div>
                <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                    <div className="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm membershipPlan={membershipPlan} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentCard;