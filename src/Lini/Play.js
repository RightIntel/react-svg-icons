import React from 'react';
import PropTypes from 'prop-types';

export default function LiniPlay({ size, ...props }) {
    let className = 'Component Lini LiniPlay';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.5 20h-17C.673 20 0 19.327 0 18.5v-17C0 .673.673 0 1.5 0h17c.827 0 1.5.673 1.5 1.5v17c0 .827-.673 1.5-1.5 1.5zM1.5 1a.5.5 0 00-.5.5v17a.5.5 0 00.5.5h17a.5.5 0 00.5-.5v-17a.5.5 0 00-.5-.5h-17z" />
                <path d="M6.5 16a.5.5 0 01-.5-.499v-11a.499.499 0 01.783-.411l8 5.5a.499.499 0 010 .824l-8 5.5a.503.503 0 01-.283.088zM7 5.451v9.099l6.617-4.549L7 5.452z" />
            </svg>
        </span>
    );
}

LiniPlay.propTypes = {
    size: PropTypes.number.isRequired,
};
