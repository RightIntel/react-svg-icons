import React from 'react';
import PropTypes from 'prop-types';

export default function LiniLan({ size, ...props }) {
    let className = 'Component Lini LiniLan';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.5 10H10V8h1.5a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5h-4a.5.5 0 00-.5.5v4a.5.5 0 00.5.5H9v2H.5a.5.5 0 000 1H4v2H2.5a.5.5 0 00-.5.5v4a.5.5 0 00.5.5h4a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5H5v-2h9v2h-1.5a.5.5 0 00-.5.5v4a.5.5 0 00.5.5h4a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5H15v-2h3.5a.5.5 0 000-1zM8 4h3v3H8V4zM6 17H3v-3h3v3zm10 0h-3v-3h3v3z" />
            </svg>
        </span>
    );
}

LiniLan.propTypes = {
    size: PropTypes.number.isRequired,
};