import React from 'react';
import PropTypes from 'prop-types';

export default function LiniAtSign({ size, ...props }) {
    let className = 'Component Lini LiniAtSign';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M17.071 2.929C15.182 1.04 12.671 0 10 0S4.818 1.04 2.929 2.929C1.04 4.818 0 7.329 0 10s1.04 5.182 2.929 7.071A9.934 9.934 0 0010 20a9.894 9.894 0 004.465-1.05 10.083 10.083 0 003.43-2.812.5.5 0 10-.789-.615A8.95 8.95 0 0110 18.999c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9c0 1.766-1.028 3-2.5 3a2.503 2.503 0 01-2.5-2.5v-4a.5.5 0 00-1 0v.857a3.99 3.99 0 00-3-1.357c-2.206 0-4 1.794-4 4s1.794 4 4 4c1.43 0 2.687-.755 3.395-1.887a3.504 3.504 0 003.105 1.887c.968 0 1.853-.393 2.494-1.107.658-.734 1.006-1.734 1.006-2.893a9.934 9.934 0 00-2.929-7.071zM10 13c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" />
            </svg>
        </span>
    );
}

LiniAtSign.propTypes = {
    size: PropTypes.number.isRequired,
};
