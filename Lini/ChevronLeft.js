import React from 'react';
import PropTypes from 'prop-types';

export default function LiniChevronLeft({ size, ...props }) {
    let className = 'Component Lini LiniChevronLeft';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M14 20a.5.5 0 00.354-.853l-8.646-8.646 8.646-8.646a.5.5 0 00-.707-.707l-9 9a.5.5 0 000 .707l9 9a.498.498 0 00.354.146z" />
            </svg>
        </span>
    );
}

LiniChevronLeft.propTypes = {
    size: PropTypes.number.isRequired,
};
