import React from 'react';
import { Triangle } from 'react-loader-spinner';

const LargeSpinner = () => {
    return (
        <div className='flex justify-center items-center'>
            <Triangle
                height="100"
                width="100"
                color="#f43f5e"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    );
};

export default LargeSpinner;