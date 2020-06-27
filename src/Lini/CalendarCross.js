import React from 'react';
import PropTypes from 'prop-types';

export default function LiniCalendarCross({ size, ...props }) {
    let className = 'Component Lini LiniCalendarCross';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.5 2H16v-.5a.5.5 0 00-1 0V2H5v-.5a.5.5 0 00-1 0V2H1.5C.673 2 0 2.673 0 3.5v14c0 .827.673 1.5 1.5 1.5h17c.827 0 1.5-.673 1.5-1.5v-14c0-.827-.673-1.5-1.5-1.5zm-17 1H4v1.5a.5.5 0 001 0V3h10v1.5a.5.5 0 001 0V3h2.5a.5.5 0 01.5.5V6H1V3.5a.5.5 0 01.5-.5zm17 15h-17a.5.5 0 01-.5-.5V7h18v10.5a.5.5 0 01-.5.5z" />
                <path d="M10.707 12.5l2.646-2.646a.5.5 0 00-.707-.707L10 11.793 7.354 9.147a.5.5 0 00-.707.707L9.293 12.5l-2.646 2.646a.5.5 0 00.708.707l2.646-2.646 2.646 2.646a.498.498 0 00.708 0 .5.5 0 000-.707L10.709 12.5z" />
            </svg>
        </span>
    );
}

LiniCalendarCross.propTypes = {
    size: PropTypes.number.isRequired,
};
