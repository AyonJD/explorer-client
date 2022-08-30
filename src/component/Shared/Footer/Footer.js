// import React from 'react';
// import { Link } from 'react-router-dom';
// import img1 from '../../../assets/img1.jpg' 
// import img2 from '../../../assets/img2.jpg' 
// import img3 from '../../../assets/img3.jpg' 
// import { FaAddressCard ,FaFacebookF} from "react-icons/fa";
// import { AiOutlinePhone ,AiOutlineTwitter } from "react-icons/ai";
// import { MdEmail} from "react-icons/md";

// const Footer = () => {
//     const today = new Date()
//     const year = today.getFullYear()
//     return (

//        <> 
     
//    <section className="py-11  ">
//            <div className="container mx-auto">
//               <div className = "grid lg:grid-cols-4 md:grid-cols-1 gap-4 mb-11">
//                 <div className='logoBorder '>
//                     <h1 className=" text-3xl font-bold"><i>EXPLO</i>RER</h1>
//                     <h2 className="text-[13px] pb-5 text-amber-400">Blog Enterprice</h2>
//                     <p className="  pb-5">
//                         Lorem ipsum dolor sitamet consectetur adipisicing elit. 
//                         Illo ratione optio, cumque error vero voluptates fugit 
//                         necessitatibus accusantium voluptatum earum neque eaque 
//                     </p>
//                 </div>
//                 <div className='footerBorder'>
//                   <div className='ml-20'>
//                   <h1 className=" text-2xl font-medium pb-5">Explorer</h1>
//                     <h1 className=" font-medium pb-5">About us</h1>
//                     <h1 className=" font-medium pb-5">Meet our Time</h1>
//                     <h1 className=" font-medium pb-5">Contact us</h1>
//                     <h1 className=" font-medium pb-5">Service</h1>
//                     <h1 className=" font-medium pb-5">Service</h1>
//                   </div>
//                 </div>
//                 <div>
//                 <h1 className=" text-2xl font-medium pb-5">Recent post</h1>
//                 <div className = "grid grid-cols-2 gap-3 mb-5">
//                     <div className="flex items-center" style={{width:'120px' , height:'100px'}}>
//                         <img src={img1} className=" rounded-tl-lg" style={{width:'100%'}} alt=""></img>

//         <div className=' bg-base-200'>
//             <div className='mid-container'>
//                 <footer className="footer py-10 text-base-content grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 grid-cols-1">
//                     <div>
//                         <span
//                             className="footer-title text-secondary opacity-80">Categories</span>
//                         <Link
//                             to="/" className="link link-hover hover:no-underline hover:tracking-widest hover:text-primary duration-300">Fashion</Link>

//                         <Link
//                             to="/" className="link link-hover hover:no-underline hover:tracking-widest hover:text-primary duration-300">Photography</Link>

//                         <Link
//                             to="/" className="link link-hover hover:no-underline hover:tracking-widest hover:text-primary duration-300">Fitness</Link>

//                         <Link
//                             to="/" className="link link-hover hover:no-underline hover:tracking-widest hover:text-primary duration-300">Entertainment</Link>

//                     </div>
//                     <div>
//                         <p className="t">Lorem ipsum dolor
//                         Lorem ipsum dolor
//                         Lorem ipsum dolor
//                         </p>
//                         <h1 className="sssssss">3 january 2022</h1>
//                     </div>
//                 </div>
//                 </div>
//                 <div className = "grid grid-cols-2 gap-3">
//                     <div className="flex items-center" style={{width:'120px' , height:'100px'}}  >
//                         <img src={img2} className=" rounded-tl-lg" style={{width:'100%'}} alt=""></img>
//                     </div>
//                     <div>
//                         <p className="">Lorem ipsum dolor
//                         Lorem ipsum dolor
//                         Lorem ipsum dolor
//                         </p>
//                         <h1 className="">3 january 2022</h1>
//                     </div>
//                 </div>
//                 <div>
                    
//                 </div>
//                 </div>
//                 <div className='footerContact'>
//                 <h1 className=" text-2xl font-medium pb-5">Contact Info</h1>
//                 <div className='mb-1 flex'>
//                <span className={`text-[19px]  icon}`}> <FaAddressCard/></span>
//                  <span>
//                  <span className='font-bold text-[19px] '> Address:</span>
//                  <span className="ml-2 ">address dhaka -1207 </span>
//                  </span>
//                 </div>
//                 <div className=' flex items-center '>
//                 <span className={`text-[19px] icon`}> <MdEmail/></span>
//                 <span>
//                 <span className='font-bold text-[19px] '>Email:</span>
//                 <span className="ml-2 ">xxxx@gmail.com </span>
//                 </span>
//                 </div>
//                 <div className='items-center flex'>
//                 <span className={` text-[19px]  'icon'`}> <AiOutlinePhone/></span>
//               <span>
//               <span className='font-bold text-[19px] '>Phone:</span>
//                 <span className="ml-2 ">01905430957546 </span>
//               </span>
//                 </div>

//                 <div 
//                        className="flex mt-10 ">
//                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current hover:text-primary duration-300"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
//                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current hover:text-primary duration-300"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
//                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current hover:text-primary duration-300"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
//                    </div>
//                 </div>
             
//               </div>
//               <hr></hr>
//               <div>
//                 <h1 className='text-center pt-6 '>&copy;<span className="text-amber-400"> copyright</span> Article/<span className=""> {year}</span></h1>
//               </div>
//            </div>
        
           
//        </section>
//    </>
//     );
// };

// export default Footer;