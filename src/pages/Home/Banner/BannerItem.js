import React from 'react';

const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide;

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img h-1/3'>
                <img src={image} alt='' className="w-full rounded-xl " />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                <h1 className='text-6xl font-bold text-white'>Affordable <br />
                    Price for <br />
                    Car Servicicng</h1>

            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">

                <p className='text-xl  text-white'>Affordable price, quick service, clean work, are our policy. </p>

            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-3/4">

                <button className="btn btn-error mr-5">Error</button>
                <button className="btn btn-outline btn-error">Error</button>

            </div>

        </div>

    )
};
export default BannerItem;