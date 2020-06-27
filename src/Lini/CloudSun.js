import React from 'react';
import PropTypes from 'prop-types';

export default function LiniCloudSun({ size, ...props }) {
    let className = 'Component Lini LiniCloudSun';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M16 12c-.058 0-.115.001-.172.004a3.005 3.005 0 00-1.84-3.837A4.505 4.505 0 009.5 4a4.505 4.505 0 00-4.48 4.081A6.01 6.01 0 000 14c0 3.308 2.692 6 6 6h10c2.206 0 4-1.794 4-4s-1.794-4-4-4zM9.5 5a3.505 3.505 0 013.464 3.001 3.007 3.007 0 00-2.704 1.775A6.009 6.009 0 006.035 8a3.505 3.505 0 013.464-3zM16 19H6c-2.757 0-5-2.243-5-5s2.243-5 5-5c1.628 0 3.159.797 4.096 2.131a.5.5 0 00.908-.256A2.002 2.002 0 0113 9a2.002 2.002 0 011.467 3.359.502.502 0 00.533.812 3.004 3.004 0 014 2.83c0 1.654-1.346 3-3 3zM9.5 3a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5zM13.5 4a.5.5 0 01-.354-.853l1-1a.5.5 0 01.707.707l-1 1a.498.498 0 01-.354.146zM16.5 7h-1a.5.5 0 010-1h1a.5.5 0 010 1zM3.5 7h-1a.5.5 0 010-1h1a.5.5 0 010 1zM5.5 4a.502.502 0 01-.354-.146l-1-1a.5.5 0 01.707-.707l1 1A.5.5 0 015.499 4z" />
            </svg>
        </span>
    );
}

LiniCloudSun.propTypes = {
    size: PropTypes.number.isRequired,
};
