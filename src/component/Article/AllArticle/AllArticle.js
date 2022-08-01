import React, { useEffect, useState } from 'react';
import './AllArticle.css';

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
        fetch(`http://localhost:5000/blogs?page=${pageNumber}&count=${articleCount}`)
            .then(res => res.json())
            .then(data => {
                setArticles(data);
            }
            )
    }, [pageNumber, articleCount]);

    //This is only for getting the 
    useEffect(() => {
        fetch('http://localhost:5000/blogs-count')
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
                    <li>
                        <button className={` mx-1 text-xs md:text-base ${active ? "btn-primary" : ""}`}>{pageNumber} </button>
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
    );
};

export default AllArticle;