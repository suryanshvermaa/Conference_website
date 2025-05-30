import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Allphotosgallery = () => {
    const [Images, setImages] = useState([]);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/photogallery/all`)
            .then(response => response.json())
            .then(data => setImages(data)) // Show only 6 images
            .catch(error => console.error("Error fetching images:", error));
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
        <div style={{ width:"100%",height:"100%", display: 'flex',justifyContent:"center",alignItems:"center", flexWrap: 'wrap', gap: '20px',marginTop:'100px',marginBottom:'100px' }}>
            {Images.map(photo => (
                <div key={photo._id} style={{ border: '1px solid #ddd', padding: '10px' }}>
                    <img
                        src={photo.imageUrl}
                        alt="Uploaded"
                        style={{ width: '200px', height: '200px', display: 'block', marginBottom: '10px' }}
                    />
                    <button
                        onClick={() => handleDelete(photo._id)}
                        style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '8px 12px', cursor: 'pointer' }}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    )
};



export default Allphotosgallery
