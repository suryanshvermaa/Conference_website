import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AdminLoader from './AdminLoader';

const Allphotosgallery = () => {
    const [Images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [deleteTarget, setDeleteTarget] = useState(null);
    useEffect(() => {
        const fetchImages = async () => {
            setLoading(true);
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/photogallery/all`);
                const data = await res.json();
                setImages(data);
            } catch (error) {
                console.error("Error fetching images:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchImages();
    }, []);
    const handleDeleteClick = (id) => {
        setDeleteTarget(id);
        setShowDeleteConfirm(true);
    };

    const handleDeleteConfirm = async () => {
        if (!deleteTarget) return;

        try {
            await axios.delete(`${import.meta.env.VITE_API_URL}/photogallery/delete/${deleteTarget}`, { headers: { token: localStorage.getItem('token') } });
            setImages(Images.filter(photo => photo._id !== deleteTarget));
        } catch (error) {
            console.error('Error deleting photo:', error);
            alert('Failed to delete photo. Please try again.');
        } finally {
            setShowDeleteConfirm(false);
            setDeleteTarget(null);
        }
    };

    const handleDeleteCancel = () => {
        setShowDeleteConfirm(false);
        setDeleteTarget(null);
    };
    return (
                <div className="space-y-6">
                    <div>
                        <h2 className="admin-title">Delete Photos</h2>
                        <p className="admin-muted mt-1">Remove images from the photo gallery.</p>
                    </div>

                    {loading ? (
                        <div className="admin-card">
                            <div className="admin-card-inner">
                                <AdminLoader label="Loading photos..." />
                            </div>
                        </div>
                    ) : Images.length === 0 ? (
                        <p className="text-center text-zinc-600 text-sm">No photos found.</p>
                    ) : (
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {Images.map((photo) => (
                                <div key={photo._id} className="admin-card overflow-hidden">
                                    <div className="h-56 w-full bg-zinc-100">
                                        <img
                                            src={photo.imageUrl}
                                            alt="Uploaded"
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className="p-4">
                                         <button
                                             onClick={() => handleDeleteClick(photo._id)}
                                             className="admin-button-danger w-full"
                                         >
                                             Delete
                                         </button>
                                    </div>
                                </div>
                            ))}
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {showDeleteConfirm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Confirm Deletion</h3>
                        <p className="text-gray-600 mb-6">
                            Are you sure you want to delete this photo? This action cannot be undone.
                        </p>
                        <div className="flex gap-3 justify-end">
                            <button
                                onClick={handleDeleteCancel}
                                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDeleteConfirm}
                                className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
                </div>
    )
};



export default Allphotosgallery
