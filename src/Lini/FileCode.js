import React from 'react';
import PropTypes from 'prop-types';

export default function LiniFileCode({ size, ...props }) {
    let className = 'Component Lini LiniFileCode';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M17.854 5.646l-4.5-4.5A.5.5 0 0013 1H3.5C2.673 1 2 1.673 2 2.5v16c0 .827.673 1.5 1.5 1.5h13c.827 0 1.5-.673 1.5-1.5V6a.504.504 0 00-.146-.354zM16.793 6H13.5a.5.5 0 01-.5-.5V2.207L16.793 6zM16.5 19h-13a.5.5 0 01-.5-.5v-16a.5.5 0 01.5-.5H12v3.5c0 .827.673 1.5 1.5 1.5H17v11.5a.5.5 0 01-.5.5z" />
                <path d="M7 17a.502.502 0 01-.354-.146l-2-2a.5.5 0 010-.707l2-2a.5.5 0 01.707.707L5.707 14.5l1.646 1.646a.5.5 0 01-.354.853zM9.5 17a.5.5 0 01-.488-.612l.914-4a.5.5 0 01.975.223l-.914 4A.5.5 0 019.5 17zM13 17a.5.5 0 01-.354-.853l1.646-1.646-1.646-1.646a.5.5 0 01.707-.707l2 2a.5.5 0 010 .707l-2 2a.498.498 0 01-.354.146z" />
            </svg>
        </span>
    );
}

LiniFileCode.propTypes = {
    size: PropTypes.number.isRequired,
};
