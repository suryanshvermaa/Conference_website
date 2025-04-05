import React from 'react'

const Accomodations = () => {
    return (
        <div>
            <div className="mt-8 py-16 bg-white rounded-xl shadow-lg max-w-5xl px-2">
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-b-4 border-blue-500 w-full text-center">Accommodation</h2>

                {/* Guest House and Hostels */}
                <h3 className="text-xl font-semibold text-black mt-4">• Guest House and Hostels</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mt-2">
                    Accommodation in the <span className="font-bold">Guest house</span> and
                    <span className="font-bold"> Boy’s/Girl’s hostels</span> will be provided based on availability.
                </p>

                {/* Nearby Hotels */}
                <h3 className="text-xl font-semibold text-black mt-6">• Nearby Hotels</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mt-2">
                    In response to participant requests, a list of nearby hotels has been provided for your convenience.
                    Please note that the <span className="font-bold">conference organizers / NIT Patna</span> will not be responsible for any accommodation-related issues and should not be contacted regarding such matters.
                    Participants are required to check the suitability of their accommodation on their own.
                </p>

                {/* Hotels List with Maps */}
                {[
                    {
                        name: "Hotel The Panache",
                        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.798005357842!2d85.13737947498443!3d25.61541141572459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58fe8b09b26f%3A0xd979097fefc0b342!2sHotel%20The%20Panache!5e0!3m2!1sen!2sin!4v1681823770123!5m2!1sen!2sin"
                    },
                    {
                        name: "Hotel Sharda Residency",
                        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.9359587290755!2d85.14625017361362!3d25.60704421498187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed593273f44f03%3A0x7f5079acceede4d9!2sHotel%20Sharda%20Residency!5e0!3m2!1sen!2sjp!4v1743841321983!5m2!1sen!2sjp"
                    },
                    {
                        name: "The Grand Empire",
                        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.002944162815!2d85.08538577361351!3d25.604818415073307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57eb53031cef%3A0xb5463151b823e3ce!2sTHE%20GRAND%20EMPIRE!5e0!3m2!1sen!2sjp!4v1743841973392!5m2!1sen!2sjp"
                    },
                    {
                        name: "Hotel Maurya",
                        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.8050915938917!2d85.13815787498442!3d25.615106215727006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58fe9435fef5%3A0x68abf3c76f0a7a65!2sHotel%20Maurya!5e0!3m2!1sen!2sin!4v1681823923686!5m2!1sen!2sin"
                    },
                    {
                        name: "Hotel Vrindavan",
                        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14391.809217995406!2d85.11994818096831!3d25.60650109245327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed585d50a72c77%3A0xf286ef64151e5cf3!2sHotel%20Vrindavan!5e0!3m2!1sen!2sjp!4v1743842107153!5m2!1sen!2sjp"
                    },
                    {
                        name: "Hotel Gargee Grand",
                        map: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3597.7555754593805!2d85.14080172361388!3d25.61303711473549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sHotel%20gargee%20grand%20!5e0!3m2!1sen!2sjp!4v1743842269988!5m2!1sen!2sjp"
                    }
                ].map((hotel, index) => (
                    <div key={index} className="mt-10">
                        <h4 className="text-lg md:text-xl font-semibold text-black mb-2">{hotel.name}</h4>
                        <div className="w-full h-[300px]">
                            <iframe
                                src={hotel.map}
                                width="100%"
                                height="100%"
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-lg border border-gray-300 shadow-sm"
                            ></iframe>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default Accomodations
