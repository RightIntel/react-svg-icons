import React from 'react';
import PropTypes from 'prop-types';

export default function LiniArrowUpRight({ size, ...props }) {
    let className = 'Component Lini LiniArrowUpRight';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M17.5 2h-8a.5.5 0 000 1h6.793L2.147 17.146a.5.5 0 00.708.707L17.001 3.707V10.5a.5.5 0 001 0v-8a.5.5 0 00-.5-.5z" />
            </svg>
        </span>
    );
}

LiniArrowUpRight.propTypes = {
    size: PropTypes.number.isRequired,
};
