import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterCard = () => {
    const navigate = useNavigate();

    return (
        <div className="card shadow-xl register-card rounded-md">
            <div className="card-body text-center">
                <h2 className="font-bold text-center text-warning ">
                    Join Membership
                </h2>
                <h2 className=" font-bold text-warning text-xl">
                    Want to access our <br /> Premium Content?
                </h2>
                <p className="text-[12px] text-warning">
                    Sometimes features require a sort description. This can be
                    detailed description{" "}
                </p>
                <button
                    onClick={() => navigate("/register")}
                    className="btn rounded-full text-white register-btn"
                >
                    Register Now
                </button>
                <button className="btn btn-outline  rounded-full text-warning ">
                    Contact Us
                </button>
            </div>
        </div>
    );
};

export default RegisterCard;