import React from 'react';
import PropTypes from 'prop-types';

export default function LiniCheck({ size, ...props }) {
    let className = 'Component Lini LiniCheck';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M5.5 17.5a.502.502 0 01-.354-.146l-5-5a.5.5 0 01.707-.707l4.646 4.646L19.145 2.647a.5.5 0 01.707.707l-14 14a.498.498 0 01-.354.146z" />
            </svg>
        </span>
    );
}

LiniCheck.propTypes = {
    size: PropTypes.number.isRequired,
};
