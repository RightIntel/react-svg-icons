import React from 'react';
import PropTypes from 'prop-types';

export default function LiniSun2({ size, ...props }) {
    let className = 'Component Lini LiniSun2';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M9.5 15C7.019 15 5 12.981 5 10.5S7.019 6 9.5 6 14 8.019 14 10.5 11.981 15 9.5 15zm0-8C7.57 7 6 8.57 6 10.5S7.57 14 9.5 14s3.5-1.57 3.5-3.5S11.43 7 9.5 7zM5.507 6.507a.502.502 0 01-.354-.146L3.032 4.24a.5.5 0 01.707-.707L5.86 5.654a.5.5 0 01-.354.853zM3.386 17.614a.5.5 0 01-.354-.853l2.121-2.121a.5.5 0 01.707.707l-2.121 2.121a.498.498 0 01-.354.146zM13.493 6.507a.5.5 0 01-.354-.853l2.121-2.121a.5.5 0 01.707.707l-2.121 2.121a.498.498 0 01-.354.146zM9.5 5a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v3a.5.5 0 01-.5.5zM3.5 11h-3a.5.5 0 010-1h3a.5.5 0 010 1zM9.5 20a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v3a.5.5 0 01-.5.5zM18.5 11h-3a.5.5 0 010-1h3a.5.5 0 010 1zM16.5 14a2.503 2.503 0 00-2.5 2.5v3a.5.5 0 001 0V18h3v1.5a.5.5 0 001 0v-3c0-1.378-1.122-2.5-2.5-2.5zM15 17v-.5c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5v.5h-3z" />
            </svg>
        </span>
    );
}

LiniSun2.propTypes = {
    size: PropTypes.number.isRequired,
};
