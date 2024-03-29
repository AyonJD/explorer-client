import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllArticleItems = ({ article }) => {
    const { _id, } = article;

    // console.log(article);
    const goToDetails = useNavigate();
    const handleClick = () => {
        goToDetails(`/article/${article._id}`);
    };


    return (
        <div
            onClick={() => handleClick(_id)}
            className="hero border-b-[1px] pb-5 allArticle-card "
        >
            <div className="hero-content grid lg:grid-cols-2 md:grid-cols-1 p-0 ">
                <div className="h-52 w-full cursor-pointer">
                    <img
                        src={article?.blogs?.img}
                        className=" h-52 lg:max-w-sm md:max-w-lg w-full  rounded-md shadow-xl mx-auto"
                        alt=""
                    />
                </div>
                <div className="p-3 flex items-center cursor-pointer">
                    <div>

                        <h2 className="font-semibold text-xl my-2 hover:text-[#da334a] cursor-pointer">
                            {article?.blogs?.Title?.slice(0, 50)}
                        </h2>
                        <p className="text-xs uppercase pt-1 pb-3">BY <span className='text-primary'>{article?.signedInUser?.userInfo?.name}</span> - {article?.blogs?.date}</p>
                        <p className="text-sm">
                            {article?.blogs?.desc?.slice(0, 100)}...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllArticleItems;