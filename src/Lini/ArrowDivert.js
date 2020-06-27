import React from 'react';
import PropTypes from 'prop-types';

export default function LiniArrowDivert({ size, ...props }) {
    let className = 'Component Lini LiniArrowDivert';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M19.5 4h-6a.5.5 0 000 1h4.793L8.5 14.793.854 7.147a.5.5 0 00-.707.707l8 8a.498.498 0 00.708 0L19.001 5.708v4.793a.5.5 0 001 0v-6a.5.5 0 00-.5-.5z" />
            </svg>
        </span>
    );
}

LiniArrowDivert.propTypes = {
    size: PropTypes.number.isRequired,
};
