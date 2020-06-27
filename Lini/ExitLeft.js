import React from 'react';
import PropTypes from 'prop-types';

export default function LiniExitLeft({ size, ...props }) {
    let className = 'Component Lini LiniExitLeft';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M20 4.5v12c0 .827-.673 1.5-1.5 1.5h-10c-.827 0-1.5-.673-1.5-1.5v-4a.5.5 0 011 0v4a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-12a.5.5 0 00-.5-.5h-10a.5.5 0 00-.5.5v4a.5.5 0 01-1 0v-4C7 3.673 7.673 3 8.5 3h10c.827 0 1.5.673 1.5 1.5z" />
                <path d="M3.646 7.147l-3 3a.5.5 0 000 .707l3 3a.5.5 0 00.707-.707L2.207 11H13.5a.5.5 0 000-1H2.207l2.146-2.147a.497.497 0 000-.706.5.5 0 00-.707 0z" />
            </svg>
        </span>
    );
}

LiniExitLeft.propTypes = {
    size: PropTypes.number.isRequired,
};
