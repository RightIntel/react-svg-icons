import React from 'react';
import PropTypes from 'prop-types';

export default function LiniLink({ size, ...props }) {
    let className = 'Component Lini LiniLink';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M6.5 14a.5.5 0 01-.354-.853l7-7a.5.5 0 01.707.707l-7 7a.498.498 0 01-.354.146z" />
                <path d="M14 11a4.89 4.89 0 01-.555-.031.5.5 0 01.11-.994A4.004 4.004 0 0018 5.999c0-2.206-1.794-4-4-4a4.004 4.004 0 00-3.976 4.445.5.5 0 01-.994.11A5.006 5.006 0 0114 .999c2.757 0 5 2.243 5 5s-2.243 5-5 5zM6 19c-2.757 0-5-2.243-5-5a5.006 5.006 0 015.555-4.969.5.5 0 01-.11.994A4.004 4.004 0 002 14.001c0 2.206 1.794 4 4 4a4.004 4.004 0 003.976-4.445.5.5 0 01.994-.11 5.006 5.006 0 01-4.969 5.555z" />
            </svg>
        </span>
    );
}

LiniLink.propTypes = {
    size: PropTypes.number.isRequired,
};
