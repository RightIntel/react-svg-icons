import React from 'react';
import PropTypes from 'prop-types';

export default function LiniPlus({ size, ...props }) {
    let className = 'Component Lini LiniPlus';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.5 10H10V1.5a.5.5 0 00-1 0V10H.5a.5.5 0 000 1H9v8.5a.5.5 0 001 0V11h8.5a.5.5 0 000-1z" />
            </svg>
        </span>
    );
}

LiniPlus.propTypes = {
    size: PropTypes.number.isRequired,
};
