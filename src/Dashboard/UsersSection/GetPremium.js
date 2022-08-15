import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GetPremium.css'

const GetPremium = () => {
    const navigate = useNavigate();
    const [memberrshipPlan, setMembershipPlan] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/membership-plans")
            .then((res) => res.json())
            .then((data) => {
                setMembershipPlan(data);
            }).catch((err) => {
                console.log(err);
            }
            );
    }, []);


    return (
        <div className='container mx-auto my-10 grid grid-cols-1 md:grid-cols-3 gap-5'>
            {
                memberrshipPlan?.map((plan, index) => {
                    return (
                        <div className="card-basic">
                            <div className="card-header header-basic">
                                <h1>{plan?.plan}</h1>
                            </div>
                            <div className="card-body payment_card_body">
                                <p><h2>${plan?.price} / mo</h2></p>
                                <div className="card-element-hidden-basic">
                                    <h4>Duration: {plan.duration}</h4>
                                    <h4>{plan.description}</h4>
                                    <ol className=" card_order_list mt-3">
                                        Features:
                                        {
                                            plan?.features.map((feature, index) => {
                                                return (
                                                    <li >{feature}</li>
                                                )
                                            })
                                        }
                                    </ol>
                                    <button onClick={() => navigate(`/payment/${plan._id}`)} className="btn btn-basic">Purches Now</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

// raa na kiser kanna

export default GetPremium;


