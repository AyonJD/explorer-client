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
        <div class="card-basic">
            <div class="card-header header-basic">
                <h1>Basic</h1>
            </div>
            <div class="card-body">
                <p><h2>$5 / mo</h2></p>
                <div class="card-element-hidden-basic">
                    <ul class="card-element-container">
                        <li class="card-element">2 team members</li>
                        <li class="card-element">2GB storage</li>
                        <li class="card-element">1000 request per day</li>
                        <li class="card-element">20000 users</li>
                    </ul>
                    <button class="btn btn-basic">Order now</button>
                </div>
            </div>
        </div>
    );
};

export default GetPremium;


