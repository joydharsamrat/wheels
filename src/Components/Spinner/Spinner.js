import React from 'react';
import { LineWave } from 'react-loader-spinner';

const Spinner = () => {
    return (
        <div>
            <LineWave
                height="100"
                width="100"
                color="#f43f5e"
                ariaLabel="line-wave"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                firstLineColor=""
                middleLineColor=""
                lastLineColor=""
            />
        </div>
    );
};

export default Spinner;