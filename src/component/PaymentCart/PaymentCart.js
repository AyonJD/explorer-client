import React from 'react';
import './PaymentCart.css';
import img from '../../assets/card_img.png'
import img2 from '../../assets/Payment/animation_500_l6ic96or.gif'

const PaymentCart = () => {
    return (
        <div class="my-container  mb-10">

            <form action="">
                <div class="row">
                    <div class="col relative">
                        <h6 class="title font-bold mb-10">billing address</h6>
                        <div className=" h-44 w-full flex justify-center">
                            <img className='pb-32 absolute top-[-90px]  mx-auto' src={img2} alt="" />
                        </div>
                        <div class="flex ">
                            <div class="inputBox">
                                <span>state :</span>
                                <input type="text" placeholder="Bangladesh" />
                            </div>
                            <div class="inputBox">
                                <span>zip code :</span>
                                <input type="text" placeholder="123 456" />
                            </div>
                        </div>
                        <div class="inputBox">
                            <span>address :</span>
                            <input type="text" placeholder="room - street - locality" />
                        </div>
                        <div class="inputBox">
                            <span>city :</span>
                            <input type="text" placeholder="Dhaka" />
                        </div>
                    </div>
                    <div class="col">
                        <h3 class="title font-bold mb-10">payment</h3>

                        <div class="inputBox">
                            <span>cards accepted :</span>
                            <img src={img} alt="" />
                        </div>
                        <div class="inputBox">
                            <span>name on card :</span>
                            <input type="text" placeholder="mr. Imran Hossen" />
                        </div>
                        <div class="inputBox">
                            <span>credit card number :</span>
                            <input type="number" placeholder="1111-2222-3333-4444" />
                        </div>
                        <div class="inputBox">
                            <span>exp month :</span>
                            <input type="text" placeholder="january" />
                        </div>

                        <div class="flex">
                            <div class="inputBox">
                                <span>exp year :</span>
                                <input type="number" placeholder="2022" />
                            </div>
                            <div class="inputBox">
                                <span>CVV :</span>
                                <input type="text" placeholder="1234" />
                            </div>
                        </div>
                    </div>
                </div>
                <input type="submit" value="Proceed to Checkout" class="submit-btn" />
            </form>
        </div>
    );
};

export default PaymentCart;