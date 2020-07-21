import React from 'react';
import PropTypes from 'prop-types';

export default function LiniCrop({ size, ...props }) {
    let className = 'Component Lini LiniCrop';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M19.5 15h-3a.5.5 0 010-1h3a.5.5 0 010 1zM12.5 15h-7a.5.5 0 01-.5-.5v-7a.5.5 0 011 0V14h6.5a.5.5 0 010 1zM5.5 4a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v3a.5.5 0 01-.5.5z" />
                <path d="M14.5 20a.5.5 0 01-.5-.5V6H.5a.5.5 0 010-1h14a.5.5 0 01.5.5v14a.5.5 0 01-.5.5z" />
            </svg>
        </span>
    );
}

LiniCrop.propTypes = {
    size: PropTypes.number.isRequired,
};