import React, { useContext, useEffect } from 'react';
import Banner from '../Banner/Banner';
import PremiumArticles from '../PremiumArticles/PremiumArticles';
import PopularArticle from '../PopularArticle/PopularArticle';
import RecentArticla from '../RecentArticle/RecentArticla';
import Pricing from '../Pricing/Pricing';

const Home = () => {
    // const valueObj = useContext(articleDataContext);
    // const { loader } = valueObj;
    return (
        <div>
            <Banner />
            <RecentArticla></RecentArticla>
            <PopularArticle />
            <PremiumArticles />
            {/* <Pricing></Pricing> */}
        </div>
    );
};

export default Home;