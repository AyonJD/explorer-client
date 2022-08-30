import React, { useContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { articleDataContext } from '../../../App';
import Comment from '../../../component/ArticleDetails/Comment/Comment';
import auth from '../../../firebase.init';

const ProfileArticle = ({ article, signedInUser }) => {
    const { articleId } = useParams();
    const valueObj = useContext(articleDataContext);
    const userImg = article?.signedInUser?.userInfo?.photoURL;
    const name = article?.signedInUser?.userInfo?.name;
    console.log(article);
    const date = article?.blogs.date;
    const articleTitle = article?.blogs?.Title
    const articleDesc = article?.blogs?.desc.slice(0, 200)
    const articleImg = article?.blogs?.img
    const dark = valueObj.dark
    // const authorImg = article?.signedInUser?.userInfo?.photoURL;
    // const authorName = article?.signedInUser?.userInfo?.name;

    // console.log(article?.signedInUser?.userInfo?.photoURL);


    const handleComment = (e) => {
        e.preventDefault();
        e.target.comment.value = "";
    };


    return (
        <div className="bg-base-100 w-full rounded-xl shadow-sm mb-3 p-5">
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
                <img className='rounded w-full' src={articleImg} alt="" />
            </div>

            <section className='mt-4'>
                {article?.comments?.slice(0, 2).reverse().map((comment) => (
                    <Comment comment={comment} ></Comment>
                ))}
                {/* <button >Show more</button> */}
            </section>

            <section>
                <form onSubmit={handleComment} className={dark ? "lg:space-y-6 md:space-y-5 sm:space-y-6 space-y-4 lg:py-8 md:py-8 sm:py-5 py-5 lg:px-6 md:px-6 px-4 rounded-md " : "lg:space-y-1 md:space-y-1 sm:space-y-1 space-y-1 rounded-md "}>
                    <h6 className="font-semibold text-sm">LEAVE A REPLAY</h6>
                    <textarea
                        className="textarea input-bordered focus:outline-none w-full lg:h-16 md:h-24 sm:h-24 h-24 mt-0"
                        placeholder="Your Comment"
                        name="comment"
                        required>
                    </textarea>
                    <button className="btn btn-primary btn-sm" type="submit" >Comment
                    </button>
                </form>
            </section>
        </div>
    );
};

export default ProfileArticle;