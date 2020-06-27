import React from 'react';
import PropTypes from 'prop-types';

export default function LiniFlare({ size, ...props }) {
    let className = 'Component Lini LiniFlare';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M7.507 8.507a.502.502 0 01-.354-.146L5.032 6.24a.5.5 0 01.707-.707L7.86 7.654a.5.5 0 01-.354.853zM13.614 15.614a.502.502 0 01-.354-.146l-2.121-2.121a.5.5 0 01.707-.707l2.121 2.121a.5.5 0 01-.354.853zM5.386 15.614a.5.5 0 01-.354-.853l2.121-2.121a.5.5 0 01.707.707l-2.121 2.121a.498.498 0 01-.354.146zM11.493 8.507a.5.5 0 01-.354-.853l2.121-2.121a.5.5 0 01.707.707l-2.121 2.121a.498.498 0 01-.354.146zM9.5 8a.5.5 0 01-.5-.5v-6a.5.5 0 011 0v6a.5.5 0 01-.5.5zM6.5 11h-6a.5.5 0 010-1h6a.5.5 0 010 1zM9.5 20a.5.5 0 01-.5-.5v-6a.5.5 0 011 0v6a.5.5 0 01-.5.5zM18.5 11h-6a.5.5 0 010-1h6a.5.5 0 010 1zM9.5 12c-.827 0-1.5-.673-1.5-1.5S8.673 9 9.5 9s1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1z" />
            </svg>
        </span>
    );
}

LiniFlare.propTypes = {
    size: PropTypes.number.isRequired,
};
