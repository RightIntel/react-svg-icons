import React from 'react';
import PropTypes from 'prop-types';

export default function LiniCrossCircle({ size, ...props }) {
    let className = 'Component Lini LiniCrossCircle';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M14.332 14.126l-4.08-3.626 4.08-3.626a.5.5 0 00-.664-.748L9.5 9.831 5.332 6.126a.5.5 0 10-.664.748l4.08 3.626-4.08 3.626a.5.5 0 00.664.748L9.5 11.169l4.168 3.705a.5.5 0 10.664-.748z" />
                <path d="M9.5 20c-2.538 0-4.923-.988-6.718-2.782S0 13.038 0 10.501c0-2.538.988-4.923 2.782-6.718S6.962 1 9.5 1c2.538 0 4.923.988 6.718 2.783S19 7.963 19 10.501s-.988 4.923-2.782 6.717A9.438 9.438 0 019.5 20zm0-18C4.813 2 1 5.813 1 10.5S4.813 19 9.5 19s8.5-3.813 8.5-8.5S14.187 2 9.5 2z" />
            </svg>
        </span>
    );
}

LiniCrossCircle.propTypes = {
    size: PropTypes.number.isRequired,
};
