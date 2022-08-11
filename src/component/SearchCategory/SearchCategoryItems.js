import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchCategoryItems = ({ article }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/article/${article._id}`);
    }



    return (
        <div onClick={() => handleClick(article._id)} className="shadow-xl bg-neutral cursor-pointer rounded-xl">
            <figure>
                <img
                    className="w-full h-60 rounded-t-xl"
                    src={article?.blogs?.img}
                    alt="blog"
                />
            </figure>
            <div className="card-body text-warning px-5 py-8">
                <div className="flex justify-between items-center">
                    <div className="badge bg-primary ">{article?.blogs?.category}</div>
                    <div className="text-sm">{article?.blogs?.date}</div>
                </div>
                <h1 className="text-xl font-bold">{article?.blogs?.Title?.slice(0, 30)}...</h1>
                <p className="text-sm">{article?.blogs?.desc?.slice(0, 100)}...</p>
            </div>

        </div>
    );
};

export default SearchCategoryItems;