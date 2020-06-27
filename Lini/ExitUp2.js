import React from 'react';
import PropTypes from 'prop-types';

export default function LiniExitUp2({ size, ...props }) {
    let className = 'Component Lini LiniExitUp2';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M17.5 19h-16C.673 19 0 18.327 0 17.5v-1c0-.827.673-1.5 1.5-1.5h6a.5.5 0 010 1h-6a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h16a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-6a.5.5 0 010-1h6c.827 0 1.5.673 1.5 1.5v1c0 .827-.673 1.5-1.5 1.5z" />
                <path d="M14.854 6.354a.5.5 0 01-.707 0l-4.146-4.146v14.293a.5.5 0 01-1 0V2.208L4.855 6.354a.5.5 0 01-.707-.707l5-5a.498.498 0 01.708 0l5 5a.5.5 0 010 .707z" />
            </svg>
        </span>
    );
}

LiniExitUp2.propTypes = {
    size: PropTypes.number.isRequired,
};
