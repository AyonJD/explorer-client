import React, { useContext } from 'react';
import { articleDataContext } from '../../../App';

const MegaMenu = () => {
    const valueObj = useContext(articleDataContext)
    const { articles } = valueObj
    // console.log(articles);
    return (
        <>
            {
                articles?.blogs?.map((article, index) => {
                    return (
                        <div key={index}>
                            <div>
                                <img src={article?.img} alt="" />
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
};

export default MegaMenu;