import React from 'react';
import PropTypes from 'prop-types';

export default function LiniContract3({ size, ...props }) {
    let className = 'Component Lini LiniContract3';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M17.5 18h-16C.673 18 0 17.327 0 16.5v-12C0 3.673.673 3 1.5 3h16c.827 0 1.5.673 1.5 1.5v12c0 .827-.673 1.5-1.5 1.5zM1.5 4a.5.5 0 00-.5.5v12a.5.5 0 00.5.5h16a.5.5 0 00.5-.5v-12a.5.5 0 00-.5-.5h-16z" />
                <path d="M5.5 12h-3a.5.5 0 000 1h1.793l-2.146 2.146a.5.5 0 00.708.707l2.146-2.146V15.5a.5.5 0 001 0v-3a.5.5 0 00-.5-.5zM16.5 8h-1.793l2.146-2.146a.5.5 0 00-.707-.707L14 7.293V5.5a.5.5 0 00-1 0v3a.5.5 0 00.5.5h3a.5.5 0 000-1z" />
            </svg>
        </span>
    );
}

LiniContract3.propTypes = {
    size: PropTypes.number.isRequired,
};
