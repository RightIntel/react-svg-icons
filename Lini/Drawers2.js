import React from 'react';
import PropTypes from 'prop-types';

export default function LiniDrawers2({ size, ...props }) {
    let className = 'Component Lini LiniDrawers2';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.5 3h-17C.673 3 0 3.673 0 4.5v12a.5.5 0 001 0V16h18v.5a.5.5 0 001 0v-12c0-.827-.673-1.5-1.5-1.5zm-17 1h17a.5.5 0 01.5.5V7H1V4.5a.5.5 0 01.5-.5zM19 8v3H1V8h18zM1 15v-3h18v3H1z" />
                <path d="M5.5 6h-1a.5.5 0 010-1h1a.5.5 0 010 1zM5.5 10h-1a.5.5 0 010-1h1a.5.5 0 010 1zM5.5 14h-1a.5.5 0 010-1h1a.5.5 0 010 1zM15.5 6h-1a.5.5 0 010-1h1a.5.5 0 010 1zM15.5 10h-1a.5.5 0 010-1h1a.5.5 0 010 1zM15.5 14h-1a.5.5 0 010-1h1a.5.5 0 010 1z" />
            </svg>
        </span>
    );
}

LiniDrawers2.propTypes = {
    size: PropTypes.number.isRequired,
};
