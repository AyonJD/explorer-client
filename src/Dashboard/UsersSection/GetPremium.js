import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { articleDataContext } from '../../App';
import './GetPremium.css'

const GetPremium = () => {
    const navigate = useNavigate();
    const [memberrshipPlan, setMembershipPlan] = useState([]);
    const valueObj = useContext(articleDataContext);
    const { transactionId } = valueObj;

    useEffect(() => {
        fetch("https://exclusive-xylia-ayonjd.koyeb.app/membership-plans")
            .then((res) => res.json())
            .then((data) => {
                setMembershipPlan(data);
            }).catch((err) => {
                console.log(err);
            }
            );
    }, []);


    return (
        <>
            {
                transactionId ? (
                    <div className="flex justify-center items-center screen_height">
                        <h1>You are already a premium member. Your Transaction ID is : {transactionId}</h1>
                    </div>
                ) :
                    (
                        <div className='mid-container my-10 grid grid-cols-1 md:grid-cols-3 gap-10'>
                            {
                                memberrshipPlan?.map((plan, index) => {
                                    return (
                                        // <div className="card-basic w-full">
                                        //     <div className="card-header header-basic">
                                        //         <h1>{plan?.plan}</h1>
                                        //     </div>
                                        //     <div className="card-body payment_card_body text-start">
                                        //         <p><h2>
                                        //             ${plan?.price} / {plan?.plan === "Monthly" ? "month" : plan?.plan === "Yearly" ? "year" : plan?.plan === "Lifetime" ? "One time" : ""}
                                        //         </h2></p>
                                        //         <div className="card-element-hidden-basic">
                                        //             <h4>Duration: {plan.duration}</h4>
                                        //             <h4>{plan.description}</h4>
                                        //             <ol className=" card_order_list mt-3">
                                        //                 Features:
                                        //                 {
                                        //                     plan?.features.map((feature, index) => {
                                        //                         return (
                                        //                             <li >{feature}</li>
                                        //                         )
                                        //                     })
                                        //                 }
                                        //             </ol>
                                        //             <button onClick={() => navigate(`/payment/${plan._id}`)} className="btn btn-basic">Purches Now</button>
                                        //         </div>
                                        //     </div>
                                        // </div>
                                        <div className="shadow-xl rounded-md mb-5">
                                            <h6 className='text-center text-3xl font-bold mt-4 mb-2'>{plan?.plan}</h6>
                                            <div className='w-36 mx-auto'>
                                                {/* <img className='w-full' src={img1} alt="Shoes" /> */}
                                            </div>
                                            <div className="card-body pt-0">
                                            {/* <p><h1 className="card-title text-4xl font-bold text-primary mx-auto">
                                                     ${plan?.price} / {plan?.plan === "Monthly" ? "mo" : plan?.plan === "Yearly" ? "yr" : plan?.plan === "Lifetime" ? "OneTime" : ""}
                                               </h1></p> */}

                                                <h1 className="card-title text-4xl font-bold text-primary mx-auto"><span className='flex'>{plan?.price}<span className='text-xl mt-3'>/{plan?.pack}</span></span></h1>
                                                <p className='text-sm text-secondary mt-2'>Explore pricing by product, by payment method including credit and debit cards.</p>
                                                <h2 className='text-xl font-bold mt-3'>Facilities</h2>
                                                <div className='ml-4 mt-3'>
                                                    <li className='text-sm mb-3'>600 Full-Length Workout Videos</li>
                                                    <li className='text-sm mb-3'>Customizable Calendar</li>
                                                    <li className='text-sm mb-3'>Healthy Recipes</li>
                                                    <li className='text-sm mb-3'>Health and Fitness Articles</li>
                                                    <li className='text-sm mb-3'>Positive and Supportive Online Community</li>
                                                    <li className='text-sm'>No Credit Card Needed</li>
                                                </div>
                                                <div className="card-actions justify-center mt-5">
                                                    <button onClick={() => navigate(`/payment/${plan._id}`)} className="btn btn-primary w-full">Choose Plan</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
            }

        </>
    );
};

// raa na kiser kanna

export default GetPremium;


