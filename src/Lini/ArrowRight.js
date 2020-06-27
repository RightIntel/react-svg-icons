import React from 'react';
import PropTypes from 'prop-types';

export default function LiniArrowRight({ size, ...props }) {
    let className = 'Component Lini LiniArrowRight';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M19.354 10.146l-6-6a.5.5 0 00-.707.707l5.146 5.146H1.5a.5.5 0 000 1h16.293l-5.146 5.146a.5.5 0 00.708.707l6-6a.5.5 0 000-.707z" />
            </svg>
        </span>
    );
}

LiniArrowRight.propTypes = {
    size: PropTypes.number.isRequired,
};
