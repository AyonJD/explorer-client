import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ myOrder }) => {
    const stripe = useStripe();
    const elements = useElements();

    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    // console.log(success, transactionId, 'sucess---tramsid');
    const [clientSecret, setClientSecret] = useState('');

    // const { _id, price, userName, email } = myOrder;
    // useEffect(() => {
    //     fetch('http://localhost:5000/create-payment-intent', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json',
    //             'authorization': `Bearer ${localStorage.getItem('token')}`
    //         },
    //         body: JSON.stringify({ price })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data?.clientSecret) {
    //                 setClientSecret(data.clientSecret);
    //             }
    //         });

    // }, [price])

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     if (!stripe || !elements) {
    //         return;
    //     }
    //     const card = elements.getElement(CardElement);
    //     if (card === null) {
    //         return;
    //     }
    //     const { error, paymentMethod } = await stripe.createPaymentMethod({
    //         type: 'card',
    //         card
    //     });
    //     setCardError(error?.message || '')
    //     setSuccess('');
    //     setProcessing(true);
    //     //confirm card payment
    //     const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
    //         clientSecret,
    //         {
    //             payment_method: {
    //                 card: card,
    //                 billing_details: {
    //                     name: userName,
    //                     email: email
    //                 },
    //             },
    //         },
    //     );
    //     if (intentError) {
    //         setCardError(intentError?.message)
    //         success('')
    //         setProcessing(false)
    //     }
    //     else {
    //         setCardError('')
    //         setTransactionId(paymentIntent.id);
    //         console.log(paymentIntent);
    //         setSuccess('Congrats!!! Your Payment is completed')


    //         //store payment on db
    //         const payment = {
    //             myOrder: _id,
    //             transactionId: paymentIntent.id
    //         }
    //         fetch(`http://localhost:5000/orderPay/${_id}`, {
    //             method: 'PATCH',
    //             headers: {
    //                 'content-type': 'application/json',
    //                 'authorization': `Bearer ${localStorage.getItem('token')}`
    //             },
    //             body: JSON.stringify(payment)
    //         }).then(res => res.json())
    //             .then(data => {
    //                 setProcessing(false);
    //                 // console.log(data);
    //             })
    //     }
    // }
    return (
        <>
            <form onSubmit={'handleSubmit'}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret}>
                    Complete Payment
                </button>
            </form>

            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && <div className='text-green-700 text-2xl sp-style font-bold'>
                    <p>{success}  </p>
                    <p>Your transaction Id: <span className="text-orange-500 font-bold">{transactionId}</span> </p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;