import React, { useContext } from 'react';
import { articleDataContext } from '../../../App';
import ArticleItem from '../../RecentArticle/ArticleItem';
import RecentArticleItems from '../../RecentArticle/RecentArticleItems';

const ArticleItemsRight = () => {
    const valueObj = useContext(articleDataContext);
    const { articles } = valueObj;
    const articleCopy = [...articles];

    return (
        <div>
            <div className=" grid gap-7 lg:mb-0 md:mb-0 sm:mb-5 mb-5">
                {articleCopy?.reverse()?.slice(0, 1).map((article, index) => (

                    < ArticleItem
                        key={index}
                        article={article}
                    />
                ))}
            </div>

            <div className="mt-5 grid gap-x-7 gap-y-4">
                {articles?.slice(0, 3).map((article) => (
                    <RecentArticleItems
                        key={article._id}
                        article={article}
                    ></RecentArticleItems>
                ))}
            </div>
        </div>
    );
};

export default ArticleItemsRight;