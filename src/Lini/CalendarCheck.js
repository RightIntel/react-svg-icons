import React from 'react';
import PropTypes from 'prop-types';

export default function LiniCalendarCheck({ size, ...props }) {
    let className = 'Component Lini LiniCalendarCheck';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.5 2H16v-.5a.5.5 0 00-1 0V2H5v-.5a.5.5 0 00-1 0V2H1.5C.673 2 0 2.673 0 3.5v14c0 .827.673 1.5 1.5 1.5h17c.827 0 1.5-.673 1.5-1.5v-14c0-.827-.673-1.5-1.5-1.5zm-17 1H4v1.5a.5.5 0 001 0V3h10v1.5a.5.5 0 001 0V3h2.5a.5.5 0 01.5.5V6H1V3.5a.5.5 0 01.5-.5zm17 15h-17a.5.5 0 01-.5-.5V7h18v10.5a.5.5 0 01-.5.5z" />
                <path d="M8.5 15.5a.502.502 0 01-.354-.146l-2-2a.5.5 0 01.707-.707l1.646 1.646 4.646-4.646a.5.5 0 01.707.707l-5 5a.498.498 0 01-.354.146z" />
            </svg>
        </span>
    );
}

LiniCalendarCheck.propTypes = {
    size: PropTypes.number.isRequired,
};
