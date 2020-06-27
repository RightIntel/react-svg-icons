import React from 'react';
import PropTypes from 'prop-types';

export default function LiniSmartphoneEmbed({ size, ...props }) {
    let className = 'Component Lini LiniSmartphoneEmbed';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M13.5 16h-7a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v.5h6v-.5a.5.5 0 011 0v1a.5.5 0 01-.5.5zM13.5 5a.5.5 0 01-.5-.5V3H7v1.5a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v2a.5.5 0 01-.5.5zM10.5 18h-1a.5.5 0 010-1h1a.5.5 0 010 1z" />
                <path d="M14.5 20h-9c-.827 0-1.5-.673-1.5-1.5v-4a.5.5 0 011 0v4a.5.5 0 00.5.5h9a.5.5 0 00.5-.5v-4a.5.5 0 011 0v4c0 .827-.673 1.5-1.5 1.5zM15.5 5a.5.5 0 01-.5-.5v-3a.5.5 0 00-.5-.5h-9a.5.5 0 00-.5.5v3a.5.5 0 01-1 0v-3C4 .673 4.673 0 5.5 0h9c.827 0 1.5.673 1.5 1.5v3a.5.5 0 01-.5.5zM6 13a.502.502 0 01-.354-.146l-3-3a.5.5 0 010-.707l3-3a.5.5 0 01.707.707L3.707 9.5l2.646 2.646a.5.5 0 01-.354.853zM14 13a.5.5 0 01-.354-.853l2.646-2.646-2.646-2.646a.5.5 0 01.707-.707l3 3a.5.5 0 010 .707l-3 3a.498.498 0 01-.354.146zM8.5 13a.5.5 0 01-.447-.724l3-6a.5.5 0 01.895.447l-3 6A.501.501 0 018.5 13z" />
            </svg>
        </span>
    );
}

LiniSmartphoneEmbed.propTypes = {
    size: PropTypes.number.isRequired,
};
