import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllArticleItems = ({ article }) => {
    const { Title, Category, img, desc, author, _id, } = article;

    console.log(article);
    const goToDetails = useNavigate();
    const handleClick = () => {
        goToDetails(`/article/${article._id}`);
    };


    return (
        <div
            onClick={() => handleClick(_id)}
            className="hero border-b-[1px] pb-5 allArticle-card cursor-pointer"
        >
            <div className="hero-content grid lg:grid-cols-2 md:grid-cols-1 p-0 ">
                <div className="h-52 w-full">
                    <img
                        src={article?.blogs?.img}
                        className=" h-52 lg:max-w-sm md:max-w-lg w-full  rounded-md shadow-xl mx-auto"
                        alt=""
                    />
                </div>
                <div className="p-3 flex items-center">
                    <div>
                        <p className="text-sm">{article?.blogs?.date}</p>
                        <h2 className="font-semibold text-xl my-2 hover:text-primary duration-300 cursor-pointer">
                            {article?.blogs?.Title?.slice(0,50)}
                        </h2>
                        <p className="text-sm">
                            {article?.blogs?.desc?.slice(0, 100)}...
                        </p>
                        <div className="flex gap-3 items-center mt-5">
                            <div className="avatar">
                                <div className="lg:w-12 md:w-14 sm:w-16 w-14 rounded-full">
                                    <img src={article?.signedInUser?.userInfo?.photoURL} alt={article?.signedInUser?.userInfo?.name} />
                                </div>
                            </div>
                            <div>
                                <h2 className="font-semibold text-sm cursor-pointer">
                                    {article?.signedInUser?.userInfo?.name}
                                </h2>
                                <p className="text-sm font-medium">
                                    <small>{article?.signedInUser?.userInfo?.profession}</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllArticleItems;