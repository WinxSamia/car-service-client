import React from 'react';
import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero my-28">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='relative w-1/2'>
                    <img src={person} alt='' className="w-4/5 h-full rounded-lg shadow-2xl" />
                    <img src={parts} alt='' className="absolute right-5 top-1/2 border-8 w-3/5 rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <p className='my-5 text-2xl font-bold text-orange-600'>About Us</p>
                    <h1 className="text-5xl font-bold">We Are <br />
                        Qualified & Experienced <br />
                        in This Field</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-active btn-accent">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;