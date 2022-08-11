import React from 'react';

const FaqRight = ({ content }) => {
    console.log(content);

    return (
        <div>
            <div>
                <h4 className='font-bold py-2'>{content.title} </h4>
                {
                    content?.content?.map((item, index) => {
                        return (<div tabindex={index} class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-3">
                            <div class="collapse-title font-semibold">
                                <h6>{item.question}</h6>
                            </div>
                            <div class="collapse-content text-sm">
                                <p>{item.answer}</p>
                            </div>
                        </div>)
                    })
                }

            </div>
        </div>
    );
};

export default FaqRight;