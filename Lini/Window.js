import React from 'react';
import PropTypes from 'prop-types';

export default function LiniWindow({ size, ...props }) {
    let className = 'Component Lini LiniWindow';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.5 1h-17C.673 1 0 1.673 0 2.5v15c0 .827.673 1.5 1.5 1.5h17c.827 0 1.5-.673 1.5-1.5v-15c0-.827-.673-1.5-1.5-1.5zm-17 1h17a.5.5 0 01.5.5V5H1V2.5a.5.5 0 01.5-.5zm17 16h-17a.5.5 0 01-.5-.5V6h18v11.5a.5.5 0 01-.5.5z" />
                <path d="M3 3.5a.5.5 0 11-1 0 .5.5 0 011 0zM5 3.5a.5.5 0 11-1 0 .5.5 0 011 0zM7 3.5a.5.5 0 11-1 0 .5.5 0 011 0z" />
            </svg>
        </span>
    );
}

LiniWindow.propTypes = {
    size: PropTypes.number.isRequired,
};
