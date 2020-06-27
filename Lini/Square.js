import React from 'react';
import PropTypes from 'prop-types';

export default function LiniSquare({ size, ...props }) {
    let className = 'Component Lini LiniSquare';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M17.5 20h-16C.673 20 0 19.327 0 18.5v-16C0 1.673.673 1 1.5 1h16c.827 0 1.5.673 1.5 1.5v16c0 .827-.673 1.5-1.5 1.5zM1.5 2a.5.5 0 00-.5.5v16a.5.5 0 00.5.5h16a.5.5 0 00.5-.5v-16a.5.5 0 00-.5-.5h-16z" />
            </svg>
        </span>
    );
}

LiniSquare.propTypes = {
    size: PropTypes.number.isRequired,
};
