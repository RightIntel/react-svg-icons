import React from 'react';
import PropTypes from 'prop-types';

export default function LiniUnlink({ size, ...props }) {
    let className = 'Component Lini LiniUnlink';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M5.5 6a.502.502 0 01-.354-.146l-2-2a.5.5 0 01.707-.707l2 2A.5.5 0 015.499 6zM4.5 8h-3a.5.5 0 010-1h3a.5.5 0 010 1zM7.5 5a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v3a.5.5 0 01-.5.5zM16.5 17a.502.502 0 01-.354-.146l-2-2a.5.5 0 01.707-.707l2 2a.5.5 0 01-.354.853zM18.5 13h-3a.5.5 0 010-1h3a.5.5 0 010 1zM12.5 19a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v3a.5.5 0 01-.5.5zM14 11a4.89 4.89 0 01-.555-.031.5.5 0 01.11-.994A4.004 4.004 0 0018 5.999c0-2.206-1.794-4-4-4a4.004 4.004 0 00-3.976 4.445.5.5 0 01-.994.11A5.006 5.006 0 0114 .999c2.757 0 5 2.243 5 5s-2.243 5-5 5zM6 19c-2.757 0-5-2.243-5-5a5.006 5.006 0 015.555-4.969.5.5 0 01-.11.994A4.004 4.004 0 002 14.001c0 2.206 1.794 4 4 4a4.004 4.004 0 003.976-4.445.5.5 0 01.994-.11 5.006 5.006 0 01-4.969 5.555z" />
            </svg>
        </span>
    );
}

LiniUnlink.propTypes = {
    size: PropTypes.number.isRequired,
};
