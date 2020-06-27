import React from 'react';
import PropTypes from 'prop-types';

export default function LiniCalendarInsert({ size, ...props }) {
    let className = 'Component Lini LiniCalendarInsert';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.5 2H16v-.5a.5.5 0 00-1 0V2h-3.5a.5.5 0 000 1H15v1.5a.5.5 0 001 0V3h2.5a.5.5 0 01.5.5V6h-5.5a.5.5 0 000 1H19v10.5a.5.5 0 01-.5.5h-17a.5.5 0 01-.5-.5V7h4.5a.5.5 0 000-1H1V3.5a.5.5 0 01.5-.5H4v1.5a.5.5 0 001 0V3h2.5a.5.5 0 000-1H5v-.5a.5.5 0 00-1 0V2H1.5C.673 2 0 2.673 0 3.5v14c0 .827.673 1.5 1.5 1.5h17c.827 0 1.5-.673 1.5-1.5v-14c0-.827-.673-1.5-1.5-1.5z" />
                <path d="M4.5 16h-1a.5.5 0 010-1h1a.5.5 0 010 1zM7.5 16h-1a.5.5 0 010-1h1a.5.5 0 010 1zM10.5 16h-1a.5.5 0 010-1h1a.5.5 0 010 1zM13.5 16h-1a.5.5 0 010-1h1a.5.5 0 010 1zM16.5 16h-1a.5.5 0 010-1h1a.5.5 0 010 1zM4.5 14h-1a.5.5 0 010-1h1a.5.5 0 010 1zM7.5 14h-1a.5.5 0 010-1h1a.5.5 0 010 1zM10.5 14h-1a.5.5 0 010-1h1a.5.5 0 010 1zM13.5 14h-1a.5.5 0 010-1h1a.5.5 0 010 1zM16.5 14h-1a.5.5 0 010-1h1a.5.5 0 010 1zM4.5 12h-1a.5.5 0 010-1h1a.5.5 0 010 1zM7.5 12h-1a.5.5 0 010-1h1a.5.5 0 010 1zM10.5 12h-1a.5.5 0 010-1h1a.5.5 0 010 1zM13.5 12h-1a.5.5 0 010-1h1a.5.5 0 010 1zM16.5 12h-1a.5.5 0 010-1h1a.5.5 0 010 1zM7.5 10h-1a.5.5 0 010-1h1a.5.5 0 010 1zM10.5 10h-1a.5.5 0 010-1h1a.5.5 0 010 1zM13.5 10h-1a.5.5 0 010-1h1a.5.5 0 010 1zM16.5 10h-1a.5.5 0 010-1h1a.5.5 0 010 1zM11.854 5.646a.5.5 0 00-.707 0l-1.146 1.146V2.499a.5.5 0 00-1 0v4.293L7.855 5.646a.5.5 0 00-.707.707l2 2a.498.498 0 00.708 0l2-2a.5.5 0 000-.707z" />
            </svg>
        </span>
    );
}

LiniCalendarInsert.propTypes = {
    size: PropTypes.number.isRequired,
};
