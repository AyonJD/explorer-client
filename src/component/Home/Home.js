import React from 'react';
import AllArticle from '../Article/AllArticle/AllArticle';
import Banner from '../Banner/Banner';
import PremiumArticles from '../PremiumArticles/PremiumArticles';
import PopularArticle from '../PopularArticle/PopularArticle';
import RecentArticla from '../RecentArticle/RecentArticla';
import Pricing from '../Pricing/Pricing';
import PaymentCart from '../PaymentCart/PaymentCart';

const Home = () => {
    return (
        <div>
            <Banner />
            <RecentArticla></RecentArticla>
            <PopularArticle />
            <PremiumArticles />
            <Pricing></Pricing>
            {/* <PaymentCart></PaymentCart> */}
           
        </div>
    );
};

export default Home;