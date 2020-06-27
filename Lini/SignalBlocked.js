import React from 'react';
import PropTypes from 'prop-types';

export default function LiniSignalBlocked({ size, ...props }) {
    let className = 'Component Lini LiniSignalBlocked';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.5 19h-2a.5.5 0 010-1h2a.5.5 0 010 1zM14.5 19h-2a.5.5 0 010-1h2a.5.5 0 010 1zM10.5 19h-2a.5.5 0 010-1h2a.5.5 0 010 1zM6.5 19h-2a.5.5 0 010-1h2a.5.5 0 010 1zM2.5 19h-2a.5.5 0 010-1h2a.5.5 0 010 1zM9.5 6C7.019 6 5 8.019 5 10.5S7.019 15 9.5 15s4.5-2.019 4.5-4.5S11.981 6 9.5 6zm0 1c.963 0 1.836.391 2.47 1.023l-5.541 4.155A3.473 3.473 0 016 10.5C6 8.57 7.57 7 9.5 7zm0 7a3.489 3.489 0 01-2.47-1.023l5.541-4.155c.274.499.429 1.07.429 1.678 0 1.93-1.57 3.5-3.5 3.5z" />
            </svg>
        </span>
    );
}

LiniSignalBlocked.propTypes = {
    size: PropTypes.number.isRequired,
};
