import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center mb-5'>
                <p className='text-orange-600 font-bold text-3xl mb-4'>Service</p>
                <h2 className='text-5xl font-semibold mb-4'>Our Service Area</h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aspernatur eos assumenda eligendi, iure cupiditate exercitationem, vero distinctio, molestias incidunt
                    ducimus nostrum atque excepturi voluptates. Sequi velit dolores tempore blanditiis. </p>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid gap-6 mb-6'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>

    );
};

export default Services;