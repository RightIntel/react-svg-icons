import React from 'react';
import PropTypes from 'prop-types';

export default function LiniTimerCrossed2({ size, ...props }) {
    let className = 'Component Lini LiniTimerCrossed2';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M15.51 5.49l-.047-.046 1.413-1.615a.5.5 0 10-.753-.659l-1.412 1.613a8.417 8.417 0 00-4.713-1.769l.001-.015v-1h.5a.5.5 0 000-1h-2a.5.5 0 000 1h.5v1L9 3.014a8.438 8.438 0 00-5.511 2.475c-1.605 1.605-2.49 3.74-2.49 6.01s.884 4.405 2.49 6.01l.047.046-1.413 1.615a.5.5 0 00.752.659l1.412-1.613A8.434 8.434 0 009.499 20c2.27 0 4.405-.884 6.01-2.49s2.49-3.74 2.49-6.01c0-2.27-.884-4.405-2.49-6.01zM2 11.5C2 7.364 5.364 4 9.5 4c1.709 0 3.287.575 4.549 1.542L10 10.17V5.501a.5.5 0 00-1 0v5.812l-4.802 5.488A7.48 7.48 0 012 11.501zM9.5 19a7.456 7.456 0 01-4.549-1.542L14.802 6.2A7.475 7.475 0 0117 11.5c0 4.136-3.364 7.5-7.5 7.5z" />
            </svg>
        </span>
    );
}

LiniTimerCrossed2.propTypes = {
    size: PropTypes.number.isRequired,
};
