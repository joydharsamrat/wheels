import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner h-screen flex items-center pl-10'>
            <div>
                <h2 className='text-white text-6xl headline'>Get Your </h2>
                <h1 className='text-white text-8xl headline'><span className='text-rose-500'>Dream</span> Car</h1>
            </div>
        </div>
    );
};

export default Banner;