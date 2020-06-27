import React from 'react';
import PropTypes from 'prop-types';

export default function LiniToggleOn({ size, ...props }) {
    let className = 'Component Lini LiniToggleOn';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M7 17h6c1.87 0 3.628-.728 4.95-2.05S20 11.87 20 10s-.728-3.628-2.05-4.95S14.87 3 13 3H7c-1.87 0-3.628.728-4.95 2.05S0 8.13 0 10s.728 3.628 2.05 4.95S5.13 17 7 17zm6-13c3.308 0 6 2.692 6 6s-2.692 6-6 6H7c-3.308 0-6-2.692-6-6s2.692-6 6-6h6z" />
                <path d="M13 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-7c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3z" />
            </svg>
        </span>
    );
}

LiniToggleOn.propTypes = {
    size: PropTypes.number.isRequired,
};
