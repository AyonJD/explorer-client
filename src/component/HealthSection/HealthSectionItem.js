import React from 'react';
import { useNavigate } from "react-router-dom";

const HealthSectionItem = ({ article }) => {

    const { _id } = article;
    const goToDetails = useNavigate();
    const handleClick = () => {
        goToDetails(`/article/${article._id}`);
    };

    return (
        <div
            onClick={() => handleClick(_id)}
            className=" "
        >
            <div className="border-b-[1px] py-3 flex gap-3 p-0 ">
                <div className="h-28 sm:w-[30%] w-[40%] cursor-pointer">
                    <img
                        src={article?.blogs?.img}
                        className=" h-28 w-full rounded shadow-2xl "
                        alt=""
                    />
                </div>
                <div className="p-3 flex items-center cursor-pointer sm:w-[70%] w-[60%]">
                    <div>
                        <h2 className="font-bold my-2 hover:text-[#da334a] cursor-pointer">
                            {article?.blogs?.Title?.slice(0, 70)}
                        </h2>
                        <p className="text-sm">By {article?.signedInUser?.userInfo?.name}- <span className='text-xs'>{article?.blogs?.date} </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HealthSectionItem;