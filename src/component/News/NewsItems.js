import React from 'react';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const NewsItems = ({ article }) => {
        const navigate = useNavigate();
        const goToDetails = useNavigate();
        const handleNavigate = () => {
            if (article.blogs.premium === "Premium") {
                toast.error("This is a premium articles");
                navigate(`/membership`);
                return;
            } else {
                goToDetails(`/article/${article._id}`);
            }
        };


        return (
            <div onClick={() => handleNavigate(article._id)}
                className='w-full cursor-pointer'>
                <img className='w-full lg:h-[180px] md:h-[150px] sm:h-[220px] h-[150px] rounded-md' src={article?.blogs?.img} alt={article?.blogs?.Title} />
                <h2 className='text-[17px] font-semibold  mt-3'>{article?.blogs?.Title}</h2>
                <p className='text-xs mt-1'><span>{article?.blogs?.date}</span></p>
            </div>
        );
    };

    export default NewsItems;