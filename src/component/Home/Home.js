import React, { useContext, useEffect } from 'react';
import Banner from '../Banner/Banner';
import PremiumArticles from '../PremiumArticles/PremiumArticles';
import PopularArticle from '../PopularArticle/PopularArticle';
import RecentArticla from '../RecentArticle/RecentArticla';
import Pricing from '../Pricing/Pricing';

import PaymentCard from '../../Dashboard/Payment/PaymentCard';



import ParalluxBanner from '../Banner/ParalluxBanner';
import News from '../News/News';
import HealthSection from '../HealthSection/HealthSection';
import Editors from '../Editors/Editors';

import Review from '../Review/Review';


import Subscribe from '../Subscribe/Subscribe';


const Home = () => {
    // const valueObj = useContext(articleDataContext);
    // const { loader } = valueObj;
    return (
        <div>
            {/* <Banner /> */}
            <Banner />
            <RecentArticla></RecentArticla>
            <PopularArticle />
            <News />
            <Subscribe />
            <HealthSection />
            <Editors />
            <PremiumArticles />
            <Review></Review>

            {/* <Pricing></Pricing> */}
            {/* <PaymentCart></PaymentCart> */}
            {/* <PaymentCard></PaymentCard> */}
        
           

            {/* <Pricing></Pricing> */}

        </div>
    );
};

export default Home;