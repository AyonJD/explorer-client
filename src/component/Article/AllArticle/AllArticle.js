import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AllArticle.css';
import AllArticleItems from './AllArticleItems';
import AllArticleItemsRight from './AllArticleItemsRight';

const AllArticle = () => {
    //PageCount is to count how many pages will be there
    const [pageCount, setPageCount] = useState(0);
    //ArticleCount is to count how many articles will be in a page
    const [articleCount, setArticleCount] = useState(10);
    //PageNumber is to count which page is currently selected
    const [pageNumber, setPageNumber] = useState(0);
    //Articles is to store all the articles
    const [articles, setArticles] = useState([]);
    //All article count is to store the total number of articles
    const [allArticleCount, setAllArticleCount] = useState(0);

    //Sending pageNumber and articleCount to the server to get the articles by pagination logic
    useEffect(() => {
        fetch(`  https://floating-ocean-13139.herokuapp.com/blogs?page=${pageNumber}&count=${articleCount}`)
            .then(res => res.json())
            .then(data => {
                setArticles(data);
            }
            )
    }, [pageNumber, articleCount]);

    //This is only for getting the 
    useEffect(() => {
        fetch('  https://floating-ocean-13139.herokuapp.com/blogs-count')
            .then(res => res.json())
            .then(data => {
                setAllArticleCount(data.count);
                const count = Math.ceil(data.count / 10);
                setPageCount(count);
            })
    }, []);

    //Creating pagination buttons
    let active = pageNumber;
    let button = [];
    for (let number = 1; number <= pageCount; number++) {
        button.push(
            <li className={`${number === active ? "active" : ""}`}>
                <button
                    key={number}
                    onClick={() => setPageNumber(number)}
                    className={"w-full text-xs md:text-lg font-bold"}
                    href
                >
                    {number}
                </button>
            </li>
        );
    }



    return (
        <>
            <div className='mt-10 lg:flex md:flex mid-container'>
                <div className="lg:w-3/4 md:w-[70%] grid gap-5 lg:mb-0 md:mb-0 sm:mb-5 mb-5">
                    {articles.map((article) => (
                        <AllArticleItems
                            key={article._id}
                            article={article}
                        ></AllArticleItems>
                    ))}
                </div>

                <div className="lg:w-1/4 md:w-[30%] grid  lg:ml-5 md:ml-5 gap-5">
                    {articles.slice(0, 4).map((article) => (
                        <AllArticleItemsRight
                            key={article._id}
                            article={article}
                        ></AllArticleItemsRight>
                    ))}
                </div>
            </div>























            <div class="pagination_container container mx-auto">
                <ul class="pagination">
                    <li>
                        <button disabled={pageNumber === 1 && true} onClick={() => setPageNumber(pageNumber - 1)} class="btn bg-transparent outline-0 border-none mx-2">PRE</button>
                    </li>
                    {
                        button.slice(0, 2).map(user => user)
                    }
                    {/* <li> */}
                    <button>.....</button>
                    {/* </li> */}
                    {
                        pageNumber > 2 &&
                        <li className={`${active ? "active" : ""}`}>
                            <button className={` mx-1 text-xs md:text-base`}>{pageNumber} </button>
                        </li>
                    }
                    <li>
                        <button onClick={() => setPageNumber(pageNumber + 1)} class="btn bg-transparent outline-0 border-none mx-2">NEX</button>
                    </li>

                    <div>
                        <select
                            onChange={(e) => {
                                setPageCount(e.target.value);
                                setPageNumber(1);
                            }}
                            className="md:text-lg md:ml-2 text-md mt-5 md:mt-0 text-center font-bold bg-primary-focus text-white px-2 py-2 md:px-2 md:py-[10px] rounded-lg"
                        >
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value={allArticleCount}>All</option>
                        </select>
                    </div>
                </ul>
            </div>
        </>
    );
};

export default AllArticle;