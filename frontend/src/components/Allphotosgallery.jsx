import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AdminLoader from './AdminLoader';

const Allphotosgallery = () => {
    const [Images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
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
    const handleDelete = async (id) => {
        try {
            await axios.delete(`${import.meta.env.VITE_API_URL}/photogallery/delete/${id}`, { headers: { token: localStorage.getItem('token') } });
            setImages(Images.filter(photo => photo._id !== id));
        } catch (error) {
            console.error('Error deleting photo:', error);
        }
    }
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
                                            onClick={() => handleDelete(photo._id)}
                                            className="admin-button-danger w-full"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
    )
};



export default Allphotosgallery
