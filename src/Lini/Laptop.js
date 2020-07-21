import React from 'react';
import PropTypes from 'prop-types';

export default function LiniLaptop({ size, ...props }) {
    let className = 'Component Lini LiniLaptop';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M3.5 14h13c.827 0 1.5-.673 1.5-1.5v-8c0-.827-.673-1.5-1.5-1.5h-13C2.673 3 2 3.673 2 4.5v8c0 .827.673 1.5 1.5 1.5zM3 4.5a.5.5 0 01.5-.5h13a.5.5 0 01.5.5v8a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5v-8zM19.5 15H.5a.5.5 0 00-.5.5v1c0 .827.673 1.5 1.5 1.5h17c.827 0 1.5-.673 1.5-1.5v-1a.5.5 0 00-.5-.5zm-1 2h-17a.5.5 0 01-.5-.5V16h18v.5a.5.5 0 01-.5.5z" />
            </svg>
        </span>
    );
}

LiniLaptop.propTypes = {
    size: PropTypes.number.isRequired,
};