import React from 'react';
import PropTypes from 'prop-types';

export default function LiniArrowUpSquare({ size, ...props }) {
    let className = 'Component Lini LiniArrowUpSquare';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M17.5 20h-16C.673 20 0 19.327 0 18.5v-16C0 1.673.673 1 1.5 1h16c.827 0 1.5.673 1.5 1.5v16c0 .827-.673 1.5-1.5 1.5zM1.5 2a.5.5 0 00-.5.5v16a.5.5 0 00.5.5h16a.5.5 0 00.5-.5v-16a.5.5 0 00-.5-.5h-16z" />
                <path d="M12.854 8.646l-3-3a.5.5 0 00-.707 0l-3 3a.5.5 0 00.707.707L9 7.207V15.5a.5.5 0 001 0V7.207l2.146 2.146a.498.498 0 00.708 0 .5.5 0 000-.707z" />
            </svg>
        </span>
    );
}

LiniArrowUpSquare.propTypes = {
    size: PropTypes.number.isRequired,
};