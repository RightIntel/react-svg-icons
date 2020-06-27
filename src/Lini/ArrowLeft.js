import React from 'react';
import PropTypes from 'prop-types';

export default function LiniArrowLeft({ size, ...props }) {
    let className = 'Component Lini LiniArrowLeft';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M.646 10.146l6-6a.5.5 0 01.707.707L2.207 9.999H18.5a.5.5 0 010 1H2.207l5.146 5.146a.5.5 0 01-.708.707l-6-6a.5.5 0 010-.707z" />
            </svg>
        </span>
    );
}

LiniArrowLeft.propTypes = {
    size: PropTypes.number.isRequired,
};
