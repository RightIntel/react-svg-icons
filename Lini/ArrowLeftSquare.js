import React from 'react';
import PropTypes from 'prop-types';

export default function LiniArrowLeftSquare({ size, ...props }) {
    let className = 'Component Lini LiniArrowLeftSquare';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M19 2.5v16c0 .827-.673 1.5-1.5 1.5h-16C.673 20 0 19.327 0 18.5v-16C0 1.673.673 1 1.5 1h16c.827 0 1.5.673 1.5 1.5zm-18 16a.5.5 0 00.5.5h16a.5.5 0 00.5-.5v-16a.5.5 0 00-.5-.5h-16a.5.5 0 00-.5.5v16z" />
                <path d="M7.646 7.146l-3 3a.5.5 0 000 .707l3 3a.5.5 0 00.707-.707L6.207 11H14.5a.5.5 0 000-1H6.207l2.146-2.146a.498.498 0 000-.708.5.5 0 00-.707 0z" />
            </svg>
        </span>
    );
}

LiniArrowLeftSquare.propTypes = {
    size: PropTypes.number.isRequired,
};