import React from 'react';
import PropTypes from 'prop-types';

export default function LiniAngle({ size, ...props }) {
    let className = 'Component Lini LiniAngle';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M19.5 18h-8.512a10.49 10.49 0 00-3.139-7h1.652a.5.5 0 000-1h-3a.52.52 0 00-.105.011l4.529-7.246a.5.5 0 00-.848-.53l-10 16A.5.5 0 00.501 19h19a.5.5 0 000-1zM6 10.643V13.5a.5.5 0 001 0v-1.928A9.495 9.495 0 019.987 18H1.402L6 10.643z" />
            </svg>
        </span>
    );
}

LiniAngle.propTypes = {
    size: PropTypes.number.isRequired,
};
