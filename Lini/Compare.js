import React from 'react';
import PropTypes from 'prop-types';

export default function LiniCompare({ size, ...props }) {
    let className = 'Component Lini LiniCompare';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.5 2H4a.504.504 0 00-.354.146l-3.5 3.5A.5.5 0 000 6v10.5c0 .827.673 1.5 1.5 1.5h17c.827 0 1.5-.673 1.5-1.5v-13c0-.827-.673-1.5-1.5-1.5zM4 3.207V5.5a.5.5 0 01-.5.5H1.207L4 3.207zM19 16.5a.5.5 0 01-.5.5h-10a.5.5 0 01-.5-.5v-2a.5.5 0 00-1 0v2c0 .175.031.343.086.5H1.5a.5.5 0 01-.5-.5V7h2.5C4.327 7 5 6.327 5 5.5V3h4.793L7.147 5.646A.5.5 0 007.001 6v4.5a.5.5 0 001 0V7h2.5c.827 0 1.5-.673 1.5-1.5V3h6.5a.5.5 0 01.5.5v13zM11 3.207V5.5a.5.5 0 01-.5.5H8.207L11 3.207z" />
                <path d="M15.354 12.146l-2-2a.5.5 0 00-.707.707l1.146 1.146H4.207l1.146-1.146a.5.5 0 00-.707-.707l-2 2a.5.5 0 000 .707l2 2a.498.498 0 00.708 0 .5.5 0 000-.707L4.208 13h9.586l-1.146 1.146a.5.5 0 00.708.707l2-2a.5.5 0 000-.707z" />
            </svg>
        </span>
    );
}

LiniCompare.propTypes = {
    size: PropTypes.number.isRequired,
};
