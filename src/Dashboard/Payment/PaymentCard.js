import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
    Elements
} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
const PaymentCard = () => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
};

export default PaymentCard;