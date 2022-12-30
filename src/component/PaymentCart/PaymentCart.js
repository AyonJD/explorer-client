// import React from 'react';
// import './PaymentCart.css';
// import img from '../../assets/card_img.png'
// import img2 from '../../assets/Payment/animation_500_l6ic96or.gif'

// const PaymentCart = () => {
//     return (
//         <div class="my-container relative ">

//         <form action="">
    
//             <div class="row">
    
//                 <div class="col">
    
//                     <h3 class="title">billing address</h3>
    
//                 <div className=" h-44 w-full ">
//                 <img className='pb-32' src={img2} alt="" />
//                 </div>
//                    <div class="flex ">
//                         <div class="inputBox">
//                             <span>state :</span>
//                             <input type="text" placeholder="Banglade4sh"/>
//                         </div>
//                         <div class="inputBox">
//                             <span>zip code :</span>
//                             <input type="text" placeholder="123 456"/>
//                         </div>
//                     </div>
//                     <div class="inputBox">
//                         <span>address :</span>
//                         <input type="text" placeholder="room - street - locality"/>
//                     </div>
//                     <div class="inputBox">
//                         <span>city :</span>
//                         <input type="text" placeholder="Dhaka"/>
//                     </div>
    
                   
    
//                 </div>
    
//                 <div class="col">
    
//                     <h3 class="title">payment</h3>
    
//                     <div class="inputBox">
//                         <span>cards accepted :</span>
//                         <img src={img} alt=""/>
//                     </div>
//                     <div class="inputBox">
//                         <span>name on card :</span>
//                         <input type="text" placeholder="mr. Imran Hossen"/>
//                     </div>
//                     <div class="inputBox">
//                         <span>credit card number :</span>
//                         <input type="number" placeholder="1111-2222-3333-4444"/>
//                     </div>
//                     <div class="inputBox">
//                         <span>exp month :</span>
//                         <input type="text" placeholder="january"/>
//                     </div>
    
//                     <div class="flex">
//                         <div class="inputBox">
//                             <span>exp year :</span>
//                             <input type="number" placeholder="2022"/>
//                         </div>
//                         <div class="inputBox">
//                             <span>CVV :</span>
//                             <input type="text" placeholder="1234"/>
//                         </div>
//                     </div>
    
//                 </div>
        
//             </div>
    
//             <input type="submit" value="proceed to checkout" class="submit-btn"/>
    
//         </form>
    
//     </div>    
//     );
// };


// m

// const PaymentCart = () => {

//     const { id } = useParams();
//     const [membershipPlan, setMembershipPlan] = useState({});

//     useEffect(() => {
//         fetch(`https://exclusive-xylia-ayonjd.koyeb.app/membership-plans/${id}`)
//             .then((res) => res.json())
//             .then((data) => {
//                 setMembershipPlan(data);
//             }).catch((err) => {
//                 console.log(err);
//             });
//     }, [id]);


//     return (
//         <div className="my-container mb-10 mid-container">

//             <form action="">
//                 <div className="row">
//                     <div className="col relative">
//                         <h6 className="title font-bold mb-10">billing address</h6>
//                         <div className=" h-44 w-full flex justify-center">
//                             <img className='pb-32 w-80 absolute top-[-40px]  mx-auto' src={img2} alt="" />
//                         </div>
//                         <div className="flex ">
//                             <div className="inputBox">
//                                 <span>state :</span>
//                                 <input type="text" placeholder="Bangladesh" />
//                             </div>
//                             <div className="inputBox">
//                                 <span>zip code :</span>
//                                 <input type="text" placeholder="123 456" />
//                             </div>
//                         </div>
//                         <div className="inputBox">
//                             <span>address :</span>
//                             <input type="text" placeholder="room - street - locality" />
//                         </div>
//                         <div className="inputBox">
//                             <span>city :</span>
//                             <input type="text" placeholder="Dhaka" />
//                         </div>
//                     </div>
//                     <div className="col">
//                         <h3 className="title font-bold mb-10">payment</h3>

//                         <div className="inputBox">
//                             <span>cards accepted :</span>
//                             <img src={img} alt="" />
//                         </div>
//                         <div className="inputBox">
//                             <span>name on card :</span>
//                             <input type="text" placeholder="mr. Imran Hossen" />
//                         </div>
//                         {/* <div className="inputBox">
//                             <span>credit card number :</span>
//                             <input type="number" placeholder="1111-2222-3333-4444" />
//                         </div>
//                         <div className="inputBox">
//                             <span>exp month :</span>
//                             <input type="text" placeholder="january" />
//                         </div>

//                         <div className="flex">
//                             <div className="inputBox">
//                                 <span>exp year :</span>
//                                 <input type="number" placeholder="2022" />
//                             </div>
//                             <div className="inputBox">
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
//                 <input type="submit" value="Proceed to Checkout" className="submit-btn" />
//             </form>
//         </div>
//     );
// };

// export default PaymentCart;
