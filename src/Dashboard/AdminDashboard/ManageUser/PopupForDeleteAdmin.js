import React from 'react';
import Popup from 'reactjs-popup';

const PopupForDeleteAdmin = ({ handleDelete, handleEdit }) => {

    return (
        <Popup className="popup_content" trigger={<button>...</button>} position="left center">
            <div className='p-4'>


                <button className='btn btn-outline btn-primary btn-sm mt-5' type="btn" onClick={handleDelete}>Remove Admin</button>
                <button className='btn btn-outline btn-primary btn-sm mt-5' type="btn" onClick={handleEdit}>Edit Admin</button>
            </div>
        </Popup>
    );
};

export default PopupForDeleteAdmin;