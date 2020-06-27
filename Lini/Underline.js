import React from 'react';
import PropTypes from 'prop-types';

export default function LiniUnderline({ size, ...props }) {
    let className = 'Component Lini LiniUnderline';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M14.5 18h-9a.5.5 0 010-1h9a.5.5 0 010 1zM10 15c-2.757 0-5-2.243-5-5V2.5a.5.5 0 011 0V10c0 2.206 1.794 4 4 4s4-1.794 4-4V2.5a.5.5 0 011 0V10c0 2.757-2.243 5-5 5z" />
            </svg>
        </span>
    );
}

LiniUnderline.propTypes = {
    size: PropTypes.number.isRequired,
};
