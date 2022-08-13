// import React, { useEffect, useState } from 'react';
// import './PaymentCart.css';
// import img from '../../assets/card_img.png'
// import img2 from '../../assets/Payment/animation_500_l6ic96or.gif'
// import CheckoutForm from '../../Dashboard/Payment/CheckoutForm';
// import { Elements } from '@stripe/react-stripe-js';
// import { useParams } from 'react-router-dom';
// import { loadStripe } from '@stripe/stripe-js';


// const stripePromise = loadStripe('pk_test_51L3PqJCnJiLLpGIeL4Uixr7K4bJ183L3tSUyFg2ENBX5ovRQKSQhaYTR8kG7WbcfvkvyuLa5RfB9eZlBJfohfpYd00PM7gqopw');

// const PaymentCart = () => {

//     const { id } = useParams();
//     const [membershipPlan, setMembershipPlan] = useState({});

//     useEffect(() => {
//         fetch(`https://floating-ocean-13139.herokuapp.com/membership-plans/${id}`)
//             .then((res) => res.json())
//             .then((data) => {
//                 setMembershipPlan(data);
//             }).catch((err) => {
//                 console.log(err);
//             });
//     }, [id]);


//     return (
//         <div class="my-container mb-10 mid-container">

//             <form action="">
//                 <div class="row">
//                     <div class="col relative">
//                         <h6 class="title font-bold mb-10">billing address</h6>
//                         <div className=" h-44 w-full flex justify-center">
//                             <img className='pb-32 w-80 absolute top-[-40px]  mx-auto' src={img2} alt="" />
//                         </div>
//                         <div class="flex ">
//                             <div class="inputBox">
//                                 <span>state :</span>
//                                 <input type="text" placeholder="Bangladesh" />
//                             </div>
//                             <div class="inputBox">
//                                 <span>zip code :</span>
//                                 <input type="text" placeholder="123 456" />
//                             </div>
//                         </div>
//                         <div class="inputBox">
//                             <span>address :</span>
//                             <input type="text" placeholder="room - street - locality" />
//                         </div>
//                         <div class="inputBox">
//                             <span>city :</span>
//                             <input type="text" placeholder="Dhaka" />
//                         </div>
//                     </div>
//                     <div class="col">
//                         <h3 class="title font-bold mb-10">payment</h3>

//                         <div class="inputBox">
//                             <span>cards accepted :</span>
//                             <img src={img} alt="" />
//                         </div>
//                         <div class="inputBox">
//                             <span>name on card :</span>
//                             <input type="text" placeholder="mr. Imran Hossen" />
//                         </div>
//                         {/* <div class="inputBox">
//                             <span>credit card number :</span>
//                             <input type="number" placeholder="1111-2222-3333-4444" />
//                         </div>
//                         <div class="inputBox">
//                             <span>exp month :</span>
//                             <input type="text" placeholder="january" />
//                         </div>

//                         <div class="flex">
//                             <div class="inputBox">
//                                 <span>exp year :</span>
//                                 <input type="number" placeholder="2022" />
//                             </div>
//                             <div class="inputBox">
//                                 <span>CVV :</span>
//                                 <input type="text" placeholder="1234" />
//                             </div>
//                         </div> */}
//                         <div>
//                             <Elements stripe={stripePromise}>
//                                 <CheckoutForm membershipPlan={membershipPlan} />
//                             </Elements>
//                         </div>
//                     </div>
//                 </div>
//                 <input type="submit" value="Proceed to Checkout" class="submit-btn" />
//             </form>
//         </div>
//     );
// };

// export default PaymentCart;