import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/img1.jpg' 
import img2 from '../../../assets/img2.jpg' 
import img3 from '../../../assets/logo.png' 
import { FaAddressCard ,FaFacebookF} from "react-icons/fa";
import { AiOutlinePhone ,AiOutlineTwitter } from "react-icons/ai";
import { MdEmail} from "react-icons/md";

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <section className="py-11  bg-base-200">
        <div className="container mx-auto">
           <div className = "grid lg:grid-cols-4 md:grid-cols-1 gap-4 mb-11">
             <div className='logoBorder' >
            <img className='h-20 w-60' src={img3} alt="" />
                 <h2 className="text-[13px] pb-5 text-amber-400">Blog site</h2>
                 <p className="  pb-5">
                     Lorem ipsum dolor sitamet consectetur adipisicing elit. 
                     Illo ratione optio, cumque error vero voluptates fugit 
                     necessitatibus accusantium voluptatum earum neque eaque 
                 </p>
             </div>
             <div className="footerBorder ml-20">
               <div className="">
               <h1 className="text-2xl font-medium pb-5">Explorer</h1>
                 <h1 className="t font-medium pb-5">About us</h1>
                 <h1 className=" font-medium pb-5">Meet our Time</h1>
                 <h1 className=" font-medium pb-5">Contact us</h1>
                 <h1 className=" font-medium pb-5">Service</h1>
                 <h1 className="t font-medium pb-5">Service</h1>
               </div>
             </div>
             <div>
             <h1 className=" text-2xl font-medium pb-5">Recent post</h1>
             <div className = "grid grid-cols-2 gap-3 mb-5">
                 <div className="flex items-center" style={{width:'120px' , height:'100px'}}>
                     <img src={img1} className=" rounded-tl-lg" style={{width:'100%'}} alt=""></img>
                 </div>
                 <div>
                     <p className="">Lorem ipsum dolor
                     Lorem ipsum dolor
                     Lorem ipsum dolor
                     </p>
                     <h1 className="text-amber-400">3 january 2022</h1>
                 </div>
             </div>
             <div className = "grid grid-cols-2 gap-3">
                 <div className="flex items-center" style={{width:'120px' , height:'100px'}}  >
                     <img src={img2} className=" rounded-tl-lg" style={{width:'100%'}} alt=""></img>
                 </div>
                 <div>
                     <p className="">Lorem ipsum dolor
                     Lorem ipsum dolor
                     Lorem ipsum dolor
                     </p>
                     <h1 className="text-amber-400">3 january 2022</h1>
                 </div>
             </div>
             <div>
                 
             </div>
             </div>
             <div className="footerContact">
             <h1 className=" text-2xl font-medium pb-5">Contact Info</h1>
             <div className='mb-3 flex'>
            <span className={`text-[19px] mt-2 `} > <FaAddressCard/></span>
              <span>
              <span className='font-bold text-[19px] '> Address:</span>
              <span className="ml-2 ">address Dhaka, bangladesh </span>
              </span>
             </div>
             <div className='mb-3 flex '>
             <span className={`text-[19px] mt-1 `}> <MdEmail/></span>
             <span>
             <span className='font-bold text-[19px] mt-2 '>Email:</span>
             <span className="ml-2 ">xxxx@gmail.com </span>
             </span>
             </div>
             <div className='mb-3 flex'>
             <span className={` text-[19px] mt-2 `}> <AiOutlinePhone/></span>
           <span>
           <span className='font-bold text-[19px]'>Phone:</span>
             <span className="ml-2 ">01905430957546 </span>
           </span>
             </div>

             <div className="iconStyle">
                 <span><FaAddressCard/></span>
                 <span><AiOutlineTwitter/></span>
                 <span><AiOutlinePhone/></span>
               
             </div>
             </div>
          
           </div>
           <hr></hr>
           <div>
             <h1 className='text-center pt-6 '>&copy;<span className="text-amber-400"> copyright</span> mill project /<span className="text-amber-400"> {year}</span></h1>
           </div>
        </div>
        
    </section>
    );
};

export default Footer;