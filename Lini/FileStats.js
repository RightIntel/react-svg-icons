import React from 'react';
import PropTypes from 'prop-types';

export default function LiniFileStats({ size, ...props }) {
    let className = 'Component Lini LiniFileStats';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M17.854 5.646l-4.5-4.5A.5.5 0 0013 1H3.5C2.673 1 2 1.673 2 2.5v16c0 .827.673 1.5 1.5 1.5h13c.827 0 1.5-.673 1.5-1.5V6a.504.504 0 00-.146-.354zM16.793 6H13.5a.5.5 0 01-.5-.5V2.207L16.793 6zM16.5 19h-13a.5.5 0 01-.5-.5v-16a.5.5 0 01.5-.5H12v3.5c0 .827.673 1.5 1.5 1.5H17v11.5a.5.5 0 01-.5.5z" />
                <path d="M8.5 15a.5.5 0 01-.5-.5v-2a.5.5 0 011 0v2a.5.5 0 01-.5.5zM10.5 15a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v3a.5.5 0 01-.5.5zM12.5 15a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5z" />
                <path d="M14.5 17h-9a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h9a.5.5 0 01.5.5v7a.5.5 0 01-.5.5zM6 16h8v-6H6v6z" />
            </svg>
        </span>
    );
}

LiniFileStats.propTypes = {
    size: PropTypes.number.isRequired,
};
