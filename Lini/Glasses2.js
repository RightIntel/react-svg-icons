import React from 'react';
import PropTypes from 'prop-types';

export default function LiniGlasses2({ size, ...props }) {
    let className = 'Component Lini LiniGlasses2';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M19.5 9h-.627A4.007 4.007 0 0015 6a4.006 4.006 0 00-3.7 2.482 1.991 1.991 0 00-2.6 0A4.006 4.006 0 005 6a4.007 4.007 0 00-3.873 3H.5a.5.5 0 000 1H1c0 2.206 1.794 4 4 4s4-1.794 4-4c0-.551.449-1 1-1s1 .449 1 1c0 2.206 1.794 4 4 4s4-1.794 4-4h.5a.5.5 0 000-1zM5 13c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm10 0c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" />
            </svg>
        </span>
    );
}

LiniGlasses2.propTypes = {
    size: PropTypes.number.isRequired,
};
