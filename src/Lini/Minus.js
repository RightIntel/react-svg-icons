import React from 'react';
import PropTypes from 'prop-types';

export default function LiniMinus({ size, ...props }) {
    let className = 'Component Lini LiniMinus';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.5 11H.5a.5.5 0 010-1h18a.5.5 0 010 1z" />
            </svg>
        </span>
    );
}

LiniMinus.propTypes = {
    size: PropTypes.number.isRequired,
};
