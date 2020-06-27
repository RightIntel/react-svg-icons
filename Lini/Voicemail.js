import React from 'react';
import PropTypes from 'prop-types';

export default function LiniVoicemail({ size, ...props }) {
    let className = 'Component Lini LiniVoicemail';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M15 6c-2.206 0-4 1.794-4 4 0 1.194.526 2.266 1.357 3H6.642a3.99 3.99 0 001.357-3c0-2.206-1.794-4-4-4s-4 1.794-4 4 1.794 4 4 4h11c2.206 0 4-1.794 4-4s-1.794-4-4-4zM1 10c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zm14 3c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" />
            </svg>
        </span>
    );
}

LiniVoicemail.propTypes = {
    size: PropTypes.number.isRequired,
};
