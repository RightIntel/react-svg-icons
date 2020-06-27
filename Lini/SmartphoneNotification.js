import React from 'react';
import PropTypes from 'prop-types';

export default function LiniSmartphoneNotification({ size, ...props }) {
    let className = 'Component Lini LiniSmartphoneNotification';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M14.5 20h-9c-.827 0-1.5-.673-1.5-1.5v-6a.5.5 0 011 0v6a.5.5 0 00.5.5h9a.5.5 0 00.5-.5v-17a.5.5 0 00-.5-.5h-4a.5.5 0 010-1h4c.827 0 1.5.673 1.5 1.5v17c0 .827-.673 1.5-1.5 1.5z" />
                <path d="M13.5 16h-7a.5.5 0 01-.5-.5v-3a.5.5 0 011 0V15h6V3h-.5a.5.5 0 010-1h1a.5.5 0 01.5.5v13a.5.5 0 01-.5.5zM10.5 18h-1a.5.5 0 010-1h1a.5.5 0 010 1z" />
                <path d="M5.5 11C2.467 11 0 8.533 0 5.5S2.467 0 5.5 0 11 2.467 11 5.5 8.533 11 5.5 11zm0-10C3.019 1 1 3.019 1 5.5S3.019 10 5.5 10 10 7.981 10 5.5 7.981 1 5.5 1z" />
                <path d="M5.5 4a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5zM5.5 9a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v3a.5.5 0 01-.5.5z" />
            </svg>
        </span>
    );
}

LiniSmartphoneNotification.propTypes = {
    size: PropTypes.number.isRequired,
};
