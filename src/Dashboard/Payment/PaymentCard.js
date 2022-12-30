import React, { useEffect, useState } from 'react';
import '../../component/PaymentCart/PaymentCart.css';
import img from '../../assets/card_img.png'
import img2 from '../../assets/Payment/animation_500_l6ic96or.gif'
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51L3PqJCnJiLLpGIeL4Uixr7K4bJ183L3tSUyFg2ENBX5ovRQKSQhaYTR8kG7WbcfvkvyuLa5RfB9eZlBJfohfpYd00PM7gqopw');

const PaymentCard = () => {

    const { id } = useParams();
    const [membershipPlan, setMembershipPlan] = useState({});

    useEffect(() => {
        fetch(`https://exclusive-xylia-ayonjd.koyeb.app/membership-plans/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setMembershipPlan(data);
            }).catch((err) => {
                console.log(err);
            });
    }, [id]);


    return (
        <div className="my-container mb-10 mid-container mb-20 mt-20">

            <div className='payment-form'>
                <div className="row">
                    <div className="col relative">
                        <h6 className="title font-bold mb-10">billing address</h6>
                        {/* <div className=" h-44 w-full flex justify-center">
                            <img className='pb-32 w-60 absolute top-[-40px]  mx-auto' src={img2} alt="" />
                        </div> */}
                        <div className="flex ">
                            <div className="inputBox">
                                <span>state :</span>
                                <input type="text" placeholder="Bangladesh" />
                            </div>
                            <div className="inputBox">
                                <span>zip code :</span>
                                <input type="text" placeholder="123 456" />
                            </div>
                        </div>
                        <div className="inputBox">
                            <span>address :</span>
                            <input type="text" placeholder="room - street - locality" />
                        </div>
                        <div className="inputBox">
                            <span>city :</span>
                            <input type="text" placeholder="Dhaka" />
                        </div>
                    </div>
                    <div className="col">
                        <h3 className="title font-bold mb-10">payment</h3>

                        <div className="inputBox">
                            <span>cards accepted :</span>
                            <img src={img} alt="" />
                        </div>
                        <div className="inputBox">
                            <span>name on card :</span>
                            <input type="text" placeholder="" />
                        </div>

                        <div>
                            <Elements stripe={stripePromise}>
                                <CheckoutForm membershipPlan={membershipPlan} />
                            </Elements>
                        </div>
                    </div>
                </div>
                <input type="submit" value="Proceed to Checkout" className="submit-btn" />
            </div>
        </div>
    );
};

export default PaymentCard;