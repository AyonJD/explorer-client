import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deleteTool, refetch, setDeleteTool }) => {
    const { toolName, _id } = deleteTool;

    const handleDelete = () => {
        fetch(`https://sheltered-taiga-12711.herokuapp.com/delete-tools/${_id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(' Product Deleted Successfully.')
                    setDeleteTool(null)
                    refetch()
                }
            })
    }

    return (
        <div>


            <input type="checkbox" id="deleteConfirmModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure want to delete {toolName}?</h3>
                    <p className="py-4">This will be permanently deleted. Continue?</p>
                    <div className="modal-action">
                        <label htmlFor="deleteConfirmModal" className="btn btn-sm">Cancel</label>
                        <button onClick={() => handleDelete()} className='btn btn-error btn-sm'>Delete</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmModal;