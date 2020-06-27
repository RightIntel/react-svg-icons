import React from 'react';
import PropTypes from 'prop-types';

export default function LiniTablet2({ size, ...props }) {
    let className = 'Component Lini LiniTablet2';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M16.5 20h-13c-.827 0-1.5-.673-1.5-1.5v-17C2 .673 2.673 0 3.5 0h13c.827 0 1.5.673 1.5 1.5v17c0 .827-.673 1.5-1.5 1.5zM3.5 1a.5.5 0 00-.5.5v17a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-17a.5.5 0 00-.5-.5h-13z" />
                <path d="M10.5 18h-1a.5.5 0 010-1h1a.5.5 0 010 1zM15.5 16h-11a.5.5 0 01-.5-.5v-13a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v13a.5.5 0 01-.5.5zM5 15h10V3H5v12z" />
            </svg>
        </span>
    );
}

LiniTablet2.propTypes = {
    size: PropTypes.number.isRequired,
};
