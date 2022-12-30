import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { articleDataContext } from '../../App';

const CheckoutForm = ({ membershipPlan }) => {
    const stripe = useStripe();
    const elements = useElements();
    const valueObj = useContext(articleDataContext);

    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    // console.log(success, transactionId, 'sucess---tramsid');
    const [clientSecret, setClientSecret] = useState('');

    // console.log(membershipPlan)

    const { _id, price, plan } = membershipPlan;
    // console.log(plan);
    const { signedInUser, transactionId, setTransactionId } = valueObj;
    const { email } = signedInUser?.userInfo;
    const mainUserObject = signedInUser?.userInfo;

    useEffect(() => {
        fetch('https://exclusive-xylia-ayonjd.koyeb.app/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });

    }, [price])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = await signedInUser?.userInfo;

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        setCardError(error?.message || '')
        setSuccess('');
        setProcessing(true);
        //confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: signedInUser?.userInfo?.name,
                        email: signedInUser?.userInfo?.email
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message)
            success('')
            setProcessing(false)
        }
        else {
            console.log("dfdgfdgfd")
            setCardError('')
            setTransactionId(paymentIntent.id);
            setSuccess('Congrats!!! Your Payment is completed')


            //store payment on db
            const payment = {
                buyer: signedInUser?.userInfo,
                service_id: _id,
                transactionId: paymentIntent.id
            }
            fetch(`https://exclusive-xylia-ayonjd.koyeb.app/orderPay`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    'authorization': ` Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(payment)
            }).then(res => res.json())
                .then(data => {
                    setProcessing(false);

                    //update user's membership plan
                    const user = {
                        userInfo: {
                            ...mainUserObject,
                            membershipPlan
                        }
                    }
                    fetch(`https://exclusive-xylia-ayonjd.koyeb.app/users/${email}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('token')}`
                        },
                        body: JSON.stringify(user)
                    }).then(res => res.json())
                        .then(data => {
                            // console.log(data);
                        }
                        )
                })
        }


    }

    console.log(transactionId, 'transactionId');

    return (
        <>
            <form onSubmit={handleSubmit}>
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