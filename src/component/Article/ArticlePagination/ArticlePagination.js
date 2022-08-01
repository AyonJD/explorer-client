import React, { useEffect } from "react";
import { FcNext } from 'react-icons/fc'
import { FcPrevious } from 'react-icons/fc'

function ArticlePagination({ pageCount, currentPage, setCurrentPage, allUsersCount, setPageSize, dataRange, searchQuery, setSearchQuery }) {
    let active = currentPage;
    let button = [];
    for (let number = 1; number <= pageCount; number++) {
        button.push(
            <button
                key={number}
                onClick={() => setCurrentPage(number)}
                className={`btn mx-1 text-xs md:text-base ${number === active ? "btn-primary" : ""}`}
            >
                {number}
            </button>
        );
    }

    useEffect(() => {
        setSearchQuery("");
    }
        , [currentPage]);

    const paginationBasic = (
        <>
        <div className="flex flex-col md:flex-row justify-between items-center container mx-auto">
            <div className="left ">
                <div className="md:flex items-center w-full">
                    <button disabled={currentPage === 1 && true} onClick={() => setCurrentPage(currentPage - 1)} class="btn btn-outline mx-2"><FcPrevious></FcPrevious></button>
                    {
                        button.slice(0, 2).map(user => user)
                    }
                    <span>.....</span>
                    {
                        currentPage > 3 &&
                        <button className={`btn mx-1 text-xs md:text-base ${active ? "btn-primary" : ""}`}>{currentPage} </button>

                    }

                    <button onClick={() => setCurrentPage(currentPage + 1)} class="btn btn-outline"><FcNext></FcNext></button>

                    <div>
                        <select
                            onChange={(e) => {
                                setPageSize(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="md:text-lg md:ml-2 text-md mt-5 md:mt-0 text-center font-bold bg-primary-focus text-white px-2 py-2 md:px-2 md:py-[10px] rounded-lg"
                        >
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value={allUsersCount}>All</option>
                        </select>
                        <span className="ml-1 md:text-lg font-medium text-base">Users/Page</span>
                    </div>
                </div>
                
            </div>
            <form className=" md:w-[400px] w-[90vw] mt-4 md:mt-0 mx-auto md:ml-auto">
                <input
                    className="input input-bordered input-primary w-full"
                    onChange={(e) => setSearchQuery(e.target.value)}
                    value={searchQuery}
                    type="text" placeholder="Name, Email, Age or Company" />
            </form>
        </div>
        <div className="text-center mt-6 mb-4 ">
        <span>
            <strong className="text-xl ">{dataRange}</strong>
        </span>
    </div>
        </>
    );

    return paginationBasic;
}

export default ArticlePagination;