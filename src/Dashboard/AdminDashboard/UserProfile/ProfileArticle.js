import React from 'react';

const ProfileArticle = ({ article, signedInUser }) => {

    const userImg = signedInUser?.userInfo?.photoURL;
    const name = signedInUser?.userInfo?.name;
    const date = article?.blogs.date;
    const articleTitle = article?.blogs?.Title
    const articleDesc = article?.blogs?.desc.slice(0, 200)
    const articleImg = article?.blogs?.img
    // const authorImg = article?.signedInUser?.userInfo?.photoURL;
    // const authorName = article?.signedInUser?.userInfo?.name;
    
    console.log(article);

    return (
        <div class="bg-base-100 w-full rounded-xl shadow-sm mb-5 p-5">
            <div className='flex items-center gap-2 '>
                <div>
                    <img className='rounded-full w-12' src={userImg} alt="" />
                </div>
                <div>
                    <h6 className='font-bold'>{name}</h6>
                    <p className='text-xs'>{date}</p>
                </div>
            </div>
            <h6 className='font-bold mt-2'>{articleTitle}</h6>
            <p className='my-2 text-xs'>{articleDesc}...</p>
            <div>
                <img className='rounded w-full'src={articleImg} alt="" />
            </div>
        </div>
    );
};

export default ProfileArticle;