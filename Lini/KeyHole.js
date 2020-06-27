import React from 'react';
import PropTypes from 'prop-types';

export default function LiniKeyHole({ size, ...props }) {
    let className = 'Component Lini LiniKeyHole';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M14.5 20h-9a.5.5 0 01-.48-.64l2.873-9.824A5.011 5.011 0 015 5c0-2.757 2.243-5 5-5s5 2.243 5 5a5.01 5.01 0 01-2.894 4.536l2.873 9.824a.499.499 0 01-.48.64zm-8.333-1h7.666L11.02 9.384a.5.5 0 01.313-.612A4.008 4.008 0 0014 5c0-2.206-1.794-4-4-4S6 2.794 6 5a4.008 4.008 0 002.667 3.772.5.5 0 01.313.612L6.167 19z" />
            </svg>
        </span>
    );
}

LiniKeyHole.propTypes = {
    size: PropTypes.number.isRequired,
};
