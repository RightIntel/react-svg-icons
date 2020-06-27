import React from 'react';
import PropTypes from 'prop-types';

export default function LiniLaptopPhone({ size, ...props }) {
    let className = 'Component Lini LiniLaptopPhone';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M11.5 14h-8c-.827 0-1.5-.673-1.5-1.5v-8C2 3.673 2.673 3 3.5 3h13c.827 0 1.5.673 1.5 1.5v1a.5.5 0 01-1 0v-1a.5.5 0 00-.5-.5h-13a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h8a.5.5 0 010 1zM11.5 18h-10C.673 18 0 17.327 0 16.5v-1a.5.5 0 01.5-.5h11a.5.5 0 010 1H1v.5a.5.5 0 00.5.5h10a.5.5 0 010 1z" />
                <path d="M18.5 18h-4c-.827 0-1.5-.673-1.5-1.5v-8c0-.827.673-1.5 1.5-1.5h4c.827 0 1.5.673 1.5 1.5v8c0 .827-.673 1.5-1.5 1.5zm-4-10a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h4a.5.5 0 00.5-.5v-8a.5.5 0 00-.5-.5h-4z" />
                <path d="M16.5 16a.498.498 0 01-.5-.5.498.498 0 01.5-.5.498.498 0 01.5.5.498.498 0 01-.5.5z" />
            </svg>
        </span>
    );
}

LiniLaptopPhone.propTypes = {
    size: PropTypes.number.isRequired,
};
