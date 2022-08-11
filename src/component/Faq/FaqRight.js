import React from 'react';

const FaqRight = ({ titlePayment }) => {
    console.log(titlePayment);
    return (
        <div>
            <div>
                <h4>{titlePayment.title}</h4>
                <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-3">
                    <div class="collapse-title font-semibold">
                        <h6>{titlePayment.content[0].question}</h6>
                    </div>
                    <div class="collapse-content text-sm">
                        <p>{titlePayment.content[0].answer}</p>
                    </div>
                </div>
                <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-3">
                    <div class="collapse-title font-semibold">
                        <h6>{titlePayment.content[1].question}</h6>
                    </div>
                    <div class="collapse-content text-sm">
                        <p>{titlePayment.content[1].answer}</p>
                    </div>
                </div>
                <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-3">
                    <div class="collapse-title font-semibold">
                        <h6>{titlePayment.content[2].question}</h6>
                    </div>
                    <div class="collapse-content text-sm">
                        <p>{titlePayment.content[2].answer}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqRight;