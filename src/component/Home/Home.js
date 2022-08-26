import React, { useContext, useEffect } from 'react';
import Banner from '../Banner/Banner';
import PremiumArticles from '../PremiumArticles/PremiumArticles';
import PopularArticle from '../PopularArticle/PopularArticle';
import RecentArticla from '../RecentArticle/RecentArticla';
import Pricing from '../Pricing/Pricing';
import ParalluxBanner from '../Banner/ParalluxBanner';
import News from '../News/News';

const Home = () => {
    // const valueObj = useContext(articleDataContext);
    // const { loader } = valueObj;
    return (
        <div>
            {/* <Banner /> */}
            <Banner />
            <RecentArticla></RecentArticla>
            <PopularArticle />
            <News/>
            <PremiumArticles />
            {/* <Pricing></Pricing> */}
        </div>
    );
};

export default Home;