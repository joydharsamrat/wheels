import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div className='banner h-screen lg:max-h-[650px] flex items-center pl-10 -mt-16'>
            <div data-aos="fade-right">
                <h2 className='text-white text-3xl lg:text-6xl headline'>Get Your </h2>
                <h1 className='text-white text-5xl lg:text-8xl headline'><span className='text-rose-500'>Dream</span> Car</h1>
            </div>
        </div>
    );
};

export default Banner;