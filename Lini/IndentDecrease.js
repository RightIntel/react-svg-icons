import React from 'react';
import PropTypes from 'prop-types';

export default function LiniIndentDecrease({ size, ...props }) {
    let className = 'Component Lini LiniIndentDecrease';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M17.5 5h-15a.5.5 0 010-1h15a.5.5 0 010 1zM17.5 8h-8a.5.5 0 010-1h8a.5.5 0 010 1zM17.5 11h-8a.5.5 0 010-1h8a.5.5 0 010 1zM17.5 14h-8a.5.5 0 010-1h8a.5.5 0 010 1zM17.5 17h-15a.5.5 0 010-1h15a.5.5 0 010 1zM6.5 14a.5.5 0 01-.3-.1l-4-3a.5.5 0 010-.8l4-3a.5.5 0 01.8.4v6a.5.5 0 01-.5.5zm-3.167-3.5L6 12.5v-4l-2.667 2z" />
            </svg>
        </span>
    );
}

LiniIndentDecrease.propTypes = {
    size: PropTypes.number.isRequired,
};
