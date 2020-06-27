import React from 'react';
import PropTypes from 'prop-types';

export default function LiniBatteryAlert({ size, ...props }) {
    let className = 'Component Lini LiniBatteryAlert';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M17.5 8H17V6.5c0-.827-.673-1.5-1.5-1.5h-14C.673 5 0 5.673 0 6.5v8c0 .827.673 1.5 1.5 1.5h14c.827 0 1.5-.673 1.5-1.5V13h.5c.827 0 1.5-.673 1.5-1.5v-2c0-.827-.673-1.5-1.5-1.5zM16 14.5a.5.5 0 01-.5.5h-14a.5.5 0 01-.5-.5v-8a.5.5 0 01.5-.5h14a.5.5 0 01.5.5v8zm2-3a.5.5 0 01-.5.5H17V9h.5a.5.5 0 01.5.5v2z" />
                <path d="M8.5 12a.5.5 0 01-.5-.5v-4a.5.5 0 011 0v4a.5.5 0 01-.5.5zM8.5 14a.498.498 0 01-.5-.5c0-.132.053-.261.147-.353S8.369 13 8.5 13a.498.498 0 01.5.5.498.498 0 01-.5.5z" />
            </svg>
        </span>
    );
}

LiniBatteryAlert.propTypes = {
    size: PropTypes.number.isRequired,
};
