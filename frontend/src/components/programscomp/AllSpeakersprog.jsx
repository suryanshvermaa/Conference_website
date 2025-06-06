import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllSpeakerprog = () => {
    const [speakers, setSpeakers] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        // Fetch all speakers when the component mounts
        const fetchSpeakers = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/speaker/all`
                );
                console.log(response.data)
                setSpeakers(response.data);
            } catch (error) {
                console.error('Error fetching speakers:', error);
                toast.error('Failed to fetch speakers. Please try again.');
            }
        };
        fetchSpeakers();
    }, []);

    // Handle delete speaker


    return (
        <div className="min-h-screen bg-gray-100 p-8 mt-14">
            <h2 className="text-3xl font-semibold text-center mb-8">All Speakers</h2>
            <div className="grid  gap-8">
                {speakers.map((speaker) => (
                    <div key={speaker._id} className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden mb-6">
                        {/* Speaker Photo and Info */}
                        <div className="w-full md:w-[30%] flex flex-col  p-4 bg-gray-100">
                            <img
                                src={speaker.imageUrl}
                                alt={speaker.name}
                                className="w-full h-[250px] object-fill rounded-lg mb-4"
                            />
                            <div className="text-center">
                                <h3 className="text-xl font-semibold uppercase">{speaker.name}</h3>
                                <p className="text-gray-700 text-sm md:text-lg lg:text-xl capitalize">{speaker.specialization.join(', ')}</p>
                                
                            </div>
                        </div>

                        {/* Talk Details */}
                        <div className="w-full md:w-[70%] p-6">
                            <h2 className="text-xl font-bold text-red-600 mb-2">
                                {/* {speaker.sessionTitle} */}
                            </h2>
                            <p className="text-sm font-semibold mb-1">
                                {/* {speaker.time} | Room: {speaker.room} */}
                            </p>
                            <p className="text-gray-800 text-sm   mb-4">
                                {speaker.description||"            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nam ullam, necessitatibus odit corporis tenetur in neque iste qui, aliquam fugit iusto eaque fuga deleniti quisquam ut ea molestias officia eos assumenda ratione! Consequuntur nobis molestias quasi similique autem qui nulla. Ipsum amet aut consectetur tenetur ratione, enim, voluptatibus consequuntur quo delectus laboriosam autem quod eaque animi labore. Accusamus perferendis tenetur esse dolores sit nostrum maiores alias rem, assumenda fuga ab, eum quibusdam ex, sapiente perspiciatis? Inventore eius quidem maxime, molestias praesentium iure est ad ab similique ratione minima ipsa quibusdam veniam id at repudiandae odio modi. Alias quam enim vero consectetur esse natus tempora molestiae odit ratione, voluptas, aspernatur eius architecto sint expedita maxime voluptatibus dolore nisi suscipit sequi necessitatibus explicabo minus sunt? Adipisci molestiae eligendi pariatur corporis recusandae! Quos, repellendus quaerat libero eius quibusdam, sint ducimus animi, recusandae assumenda blanditiis aut labore saepe ipsa iure sequi veniam corrupti?"}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <ToastContainer position="bottom-center" />
        </div>
    );
};

export default AllSpeakerprog;
