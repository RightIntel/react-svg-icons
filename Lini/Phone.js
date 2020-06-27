import React from 'react';
import PropTypes from 'prop-types';

export default function LiniPhone({ size, ...props }) {
    let className = 'Component Lini LiniPhone';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M13.5 20h-8c-.827 0-1.5-.673-1.5-1.5v-17C4 .673 4.673 0 5.5 0h8c.827 0 1.5.673 1.5 1.5v17c0 .827-.673 1.5-1.5 1.5zm-8-19a.5.5 0 00-.5.5v17a.5.5 0 00.5.5h8a.5.5 0 00.5-.5v-17a.5.5 0 00-.5-.5h-8z" />
                <path d="M10.5 3h-2a.5.5 0 010-1h2a.5.5 0 010 1zM7 2.5a.5.5 0 11-1 0 .5.5 0 011 0zM9.5 18c-.827 0-1.5-.673-1.5-1.5S8.673 15 9.5 15s1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1z" />
            </svg>
        </span>
    );
}

LiniPhone.propTypes = {
    size: PropTypes.number.isRequired,
};