import React from 'react';
import PropTypes from 'prop-types';

export default function LiniChevronUp({ size, ...props }) {
    let className = 'Component Lini LiniChevronUp';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M0 15a.5.5 0 00.853.354l8.646-8.646 8.646 8.646a.5.5 0 00.707-.707l-9-9a.5.5 0 00-.707 0l-9 9a.498.498 0 00-.146.354z" />
            </svg>
        </span>
    );
}

LiniChevronUp.propTypes = {
    size: PropTypes.number.isRequired,
};
