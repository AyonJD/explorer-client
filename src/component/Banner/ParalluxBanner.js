import React, { useEffect } from "react";
import Styled from "styled-components";
import Parallax from "parallax-js";
import PropTypes from "prop-types";

import backgroundImage from "../../assets/background.jpg";
import textImage from "../../assets/text.png";
import astronautImage from "../../assets/character.png";
import planet1Image from "../../assets/planet1.png";
import planet2Image from "../../assets/planet2.png";
import rocketImage from "../../assets/rocket.png";

const layers = [
    // {
    //     name: "text",
    //     image: textImage,
    //     dataDepth: "0.1"
    // },
    {
        name: "astronaut",
        image: astronautImage,
        dataDepth: "2"
    },
    {
        name: "planet1",
        image: planet1Image,
        dataDepth: "1"
    },
    {
        name: "planet2",
        image: planet2Image,
        dataDepth: "-1"
    },
    {
        name: "rocket",
        image: rocketImage,
        dataDepth: "0.5"
    }
];

const Container = Styled.div`
	width: 100%;
	height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
	overflow: hidden;
	background: url(${props => props.backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
`;

const ParalluxBanner = ({ backgroundImage, layers }) => {
    useEffect(() => {
        const scene = document.getElementById("scene");
        new Parallax(scene);
    });

    return (
        <Container backgroundImage={backgroundImage}>
            <div id="scene">
                {layers.map((l, index) => (
                    <img
                        key={index}
                        data-depth={l.dataDepth}
                        src={l.image}
                        alt={l.name}
                    />
                ))}
            </div>
        </Container>
    );
};

ParalluxBanner.propTypes = {
    backgroundImage: PropTypes.string,
    layers: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            image: PropTypes.string,
            dataDepth: PropTypes.string
        })
    )
};

ParalluxBanner.defaultProps = {
    backgroundImage: backgroundImage,
    layers: layers
};

export default ParalluxBanner;


































// Banner design
// import React from 'react';
// import img from "../../assets/banner-img/website.png"
// import './Banner.css'

// const Banner = () => {
//     return (
//         <section className=' bg-base-200 '>
//             <div className='mid-container'>
//                 <div className=' relative banner'>
//                     <div className=' grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 '>
//                         <div className='flex justify-center items-center'>
//                             <div className='lg:text-start md:text-start sm:text-center text-center pt-12'>
//                                 <span className='bg-neutral p-2 rounded-xl text-warning border-primary border'><button className="btn btn-xs btn-primary">New</button> Becoming a new Program Online</span>
//                                 <h1 className='lg:text-5xl md:text-4xl sm:text-5xl text-3xl font-bold my-5 '>Find the Best Article Online for your Thesis</h1>
//                                 <p className='text-sm lg:hidden md:hidden'>The right source of knowledge can be powerful professional growth, dark up right three</p>
//                             </div>
//                         </div>
//                         <div className='flex justify-end items-center w-full'>
//                             <img className='w-full' src={img} alt="" />
//                         </div>
//                     </div>

//                     <div className="card lg:w-2/5 md:w-[400px] w-full bg-neutral shadow-xl lg:p-10 md:p-10 sm:p-10 p-5 absolute border-t-8  border-primary border absolute-card">
//                         <div className='grid grid-cols-2 gap-5 text-warning '>
//                             <div className='text-center'>
//                                 <h2 className='text-3xl font-semibold'>2000+</h2>
//                                 <h2 className='text-sm'>Articles Submitted</h2>
//                             </div>
//                             <div className='text-center '>
//                                 <h2 className='text-3xl font-semibold'>150</h2>
//                                 <h2 className='text-sm'>Category Listed</h2>
//                             </div>
//                             <div className='text-center'>
//                                 <h2 className='text-3xl font-semibold'>300+</h2>
//                                 <h2 className='text-sm'>Articles Contributors</h2>
//                             </div>
//                             <div className='text-center'>
//                                 <h2 className='text-3xl font-semibold'>90%</h2>
//                                 <h2 className='text-sm'>Satisfaction Rate</h2>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Banner;