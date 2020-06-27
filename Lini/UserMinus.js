import React from 'react';
import PropTypes from 'prop-types';

export default function LiniUserMinus({ size, ...props }) {
    let className = 'Component Lini LiniUserMinus';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M9.5 11C6.467 11 4 8.533 4 5.5S6.467 0 9.5 0 15 2.467 15 5.5 12.533 11 9.5 11zm0-10C7.019 1 5 3.019 5 5.5S7.019 10 9.5 10 14 7.981 14 5.5 11.981 1 9.5 1zM11.5 20h-10C.673 20 0 19.327 0 18.5c0-.068.014-1.685 1.225-3.3.705-.94 1.67-1.687 2.869-2.219C5.558 12.33 7.377 12 9.5 12c.351 0 .698.011 1.031.031a.5.5 0 01-.062.998A16.066 16.066 0 009.5 13c-3.487 0-6.06.953-7.441 2.756C1.024 17.107 1.001 18.488 1 18.502a.5.5 0 00.5.498h10a.5.5 0 010 1z" />
                <path d="M15.5 20c-2.481 0-4.5-2.019-4.5-4.5s2.019-4.5 4.5-4.5 4.5 2.019 4.5 4.5-2.019 4.5-4.5 4.5zm0-8c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5z" />
                <path d="M17.5 16h-4a.5.5 0 010-1h4a.5.5 0 010 1z" />
            </svg>
        </span>
    );
}

LiniUserMinus.propTypes = {
    size: PropTypes.number.isRequired,
};
