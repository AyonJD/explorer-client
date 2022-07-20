import React from 'react';
import Banner from '../Banner/Banner';
import PopularArticle from '../PopularArticle/PopularArticle';
import RecentArticla from '../RecentArticle/RecentArticla';

const Home = () => {
    return (
        <div>
            <Banner />
            <RecentArticla></RecentArticla>
            <PopularArticle />

        </div>
    );
};

export default Home;