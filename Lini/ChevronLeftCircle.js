import React from 'react';
import PropTypes from 'prop-types';

export default function LiniChevronLeftCircle({ size, ...props }) {
    let className = 'Component Lini LiniChevronLeftCircle';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M2.782 3.782C4.576 1.988 6.962 1 9.5 1s4.923.988 6.718 2.782S19 7.962 19 10.499s-.988 4.923-2.782 6.718-4.18 2.782-6.718 2.782-4.923-.988-6.718-2.782S0 13.037 0 10.499s.988-4.923 2.782-6.717zM9.5 19c4.687 0 8.5-3.813 8.5-8.5S14.187 2 9.5 2C4.813 2 1 5.813 1 10.5S4.813 19 9.5 19z" />
                <path d="M11 16a.5.5 0 00.354-.853l-4.646-4.646 4.646-4.646a.5.5 0 00-.707-.707l-5 5a.5.5 0 000 .707l5 5a.498.498 0 00.354.146z" />
            </svg>
        </span>
    );
}

LiniChevronLeftCircle.propTypes = {
    size: PropTypes.number.isRequired,
};
