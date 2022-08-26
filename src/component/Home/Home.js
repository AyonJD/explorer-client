import React, { useContext, useEffect } from 'react';
import Banner from '../Banner/Banner';
import PremiumArticles from '../PremiumArticles/PremiumArticles';
import PopularArticle from '../PopularArticle/PopularArticle';
import RecentArticla from '../RecentArticle/RecentArticla';
import Pricing from '../Pricing/Pricing';

import PaymentCard from '../../Dashboard/Payment/PaymentCard';



import ParalluxBanner from '../Banner/ParalluxBanner';


const Home = () => {
    // const valueObj = useContext(articleDataContext);
    // const { loader } = valueObj;
    return (
        <div>
            {/* <Banner /> */}
            <ParalluxBanner />
            <RecentArticla></RecentArticla>
            <PopularArticle />
            <PremiumArticles />

            <Pricing></Pricing>
            {/* <PaymentCart></PaymentCart> */}
            {/* <PaymentCard></PaymentCard> */}
        
           

            {/* <Pricing></Pricing> */}

        </div>
    );
};

export default Home;