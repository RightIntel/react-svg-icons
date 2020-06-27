import React from 'react';
import PropTypes from 'prop-types';

export default function LiniWind({ size, ...props }) {
    let className = 'Component Lini LiniWind';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M19.5 15h-8a.5.5 0 010-1h8a.5.5 0 010 1zM18.5 10H10c-1.654 0-3-1.346-3-3s1.346-3 3-3a3.013 3.013 0 012.97 2.571.5.5 0 00.99-.142A4.002 4.002 0 0010 3C7.794 3 6 4.794 6 7c0 1.194.526 2.266 1.357 3H2.5C1.673 10 1 9.327 1 8.5a1.502 1.502 0 012.8-.75.499.499 0 10.865-.501A2.51 2.51 0 002.5 5.999c-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5h16a.5.5 0 000-1z" />
                <path d="M4.5 17C3.122 17 2 15.878 2 14.5S3.122 12 4.5 12h11a.5.5 0 010 1h-11c-.827 0-1.5.673-1.5 1.5a1.502 1.502 0 002.8.75.499.499 0 11.865.501 2.51 2.51 0 01-2.165 1.25z" />
            </svg>
        </span>
    );
}

LiniWind.propTypes = {
    size: PropTypes.number.isRequired,
};
