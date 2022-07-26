import React from 'react';
import Banner from '../Banner/Banner';
import LatestArticle from '../LatestArticle/LatestArticle';
import PopularArticle from '../PopularArticle/PopularArticle';
import RecentArticla from '../RecentArticle/RecentArticla';

const Home = () => {
    return (
        <div>
            <Banner />
            <RecentArticla></RecentArticla>
            <PopularArticle />
            <LatestArticle />

        </div>
    );
};

export default Home;