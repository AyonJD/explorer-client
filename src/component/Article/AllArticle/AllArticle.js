import React, { useEffect, useState } from 'react';
import './AllArticle.css';

const AllArticle = () => {
    const [pageCount, setPageCount] = useState(0);
    const [articleCount, setArticleCount] = useState(10);
    const [pageNumber, setPageNumber] = useState(0);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/blogs?page=${pageNumber}&count=${articleCount}`)
            .then(res => res.json())
            .then(data => {
                setArticles(data);
            }
            )
    }, [pageNumber, articleCount]);

    useEffect(() => {
        fetch('http://localhost:5000/blogs-count')
            .then(res => res.json())
            .then(data => {
                const count = Math.ceil(data.count / 10);
                setPageCount(count);
            })
    }, []);

    // console.log(articles);

    return (
        <div class="pagination_container container mx-auto">
            <ul class="pagination">
                {
                    [...Array()]
                }
            </ul>
        </div>
    );
};

export default AllArticle;