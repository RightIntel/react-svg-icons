import React from 'react';
import PropTypes from 'prop-types';

export default function LiniBatteryError({ size, ...props }) {
    let className = 'Component Lini LiniBatteryError';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M17.5 8H17V6.5c0-.827-.673-1.5-1.5-1.5h-14C.673 5 0 5.673 0 6.5v8c0 .827.673 1.5 1.5 1.5h14c.827 0 1.5-.673 1.5-1.5V13h.5c.827 0 1.5-.673 1.5-1.5v-2c0-.827-.673-1.5-1.5-1.5zM16 14.5a.5.5 0 01-.5.5h-14a.5.5 0 01-.5-.5v-8a.5.5 0 01.5-.5h14a.5.5 0 01.5.5v8zm2-3a.5.5 0 01-.5.5H17V9h.5a.5.5 0 01.5.5v2z" />
                <path d="M11.777 12.084L9.401 10.5l2.376-1.584a.5.5 0 10-.554-.832L8.5 9.899 5.777 8.084a.5.5 0 10-.554.832L7.599 10.5l-2.376 1.584a.5.5 0 10.555.832l2.723-1.815 2.723 1.815a.497.497 0 00.693-.139.5.5 0 00-.139-.693z" />
            </svg>
        </span>
    );
}

LiniBatteryError.propTypes = {
    size: PropTypes.number.isRequired,
};