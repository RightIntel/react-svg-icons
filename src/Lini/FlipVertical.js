import React from 'react';
import PropTypes from 'prop-types';

export default function LiniFlipVertical({ size, ...props }) {
    let className = 'Component Lini LiniFlipVertical';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M0 8.5v-8A.5.5 0 01.694.039l19 8A.5.5 0 0119.5 9H.5a.5.5 0 01-.5-.5zm1-7.247V8h16.024L1 1.253zM0 19.5v-8a.5.5 0 01.5-.5h19a.5.5 0 01.194.961l-19 8A.498.498 0 010 19.5zM1 12v6.747L17.024 12H1z" />
            </svg>
        </span>
    );
}

LiniFlipVertical.propTypes = {
    size: PropTypes.number.isRequired,
};
