import React from 'react';
import PropTypes from 'prop-types';

export default function LiniArrowUp({ size, ...props }) {
    let className = 'Component Lini LiniArrowUp';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M9.146.646l-6 6a.5.5 0 00.707.707l5.146-5.146V18.5a.5.5 0 001 0V2.207l5.146 5.146a.5.5 0 00.707-.708l-6-6a.5.5 0 00-.707 0z" />
            </svg>
        </span>
    );
}

LiniArrowUp.propTypes = {
    size: PropTypes.number.isRequired,
};
