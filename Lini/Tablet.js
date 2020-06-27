import React from 'react';
import PropTypes from 'prop-types';

export default function LiniTablet({ size, ...props }) {
    let className = 'Component Lini LiniTablet';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M15.5 20h-12c-.827 0-1.5-.673-1.5-1.5v-17C2 .673 2.673 0 3.5 0h12c.827 0 1.5.673 1.5 1.5v17c0 .827-.673 1.5-1.5 1.5zM3.5 1a.5.5 0 00-.5.5v17a.5.5 0 00.5.5h12a.5.5 0 00.5-.5v-17a.5.5 0 00-.5-.5h-12z" />
                <path d="M10 2.5a.5.5 0 11-1 0 .5.5 0 011 0zM9.5 18c-.827 0-1.5-.673-1.5-1.5S8.673 15 9.5 15s1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1z" />
            </svg>
        </span>
    );
}

LiniTablet.propTypes = {
    size: PropTypes.number.isRequired,
};
