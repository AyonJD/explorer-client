import React from 'react';

const FaqRight = ({ title }) => {
    return (
        <div>
            <div>
                <h4>Delivery</h4>
                <p> {title} </p>
                <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-3">
                    <div class="collapse-title font-semibold">
                        <h6>The shipment status shows that it has been returned/cancelled. What does it mean and who do I contact?</h6>
                    </div>
                    <div class="collapse-content text-sm">
                        <p>Sweet pie candy jelly. Sesame snaps biscuit sugar plum. Sweet roll topping fruitcake. Caramels liquorice biscuit ice cream fruitcake cotton candy tart. Donut caramels gingerbread jelly-o gingerbread pudding. Gummi bears pastry marshmallow candy canes pie. Pie apple pie carrot cake.</p>
                    </div>
                </div>
                <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-3">
                    <div class="collapse-title font-semibold">
                        <h6>The shipment status shows that it has been returned/cancelled. What does it mean and who do I contact?</h6>
                    </div>
                    <div class="collapse-content text-sm">
                        <p>Sweet pie candy jelly. Sesame snaps biscuit sugar plum. Sweet roll topping fruitcake. Caramels liquorice biscuit ice cream fruitcake cotton candy tart. Donut caramels gingerbread jelly-o gingerbread pudding. Gummi bears pastry marshmallow candy canes pie. Pie apple pie carrot cake.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqRight;