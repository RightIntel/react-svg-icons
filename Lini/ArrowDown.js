import React from 'react';
import PropTypes from 'prop-types';

export default function LiniArrowDown({ size, ...props }) {
    let className = 'Component Lini LiniArrowDown';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M9.854 19.354l6-6a.5.5 0 00-.707-.707l-5.146 5.146V1.5a.5.5 0 00-1 0v16.293l-5.146-5.146a.5.5 0 00-.707.708l6 6a.5.5 0 00.707 0z" />
            </svg>
        </span>
    );
}

LiniArrowDown.propTypes = {
    size: PropTypes.number.isRequired,
};
