import React from 'react';
import PropTypes from 'prop-types';

export default function LiniBaseball({ size, ...props }) {
    let className = 'Component Lini LiniBaseball';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M9.5 20c-2.538 0-4.923-.988-6.718-2.782S0 13.038 0 10.501c0-2.538.988-4.923 2.782-6.718S6.962 1 9.5 1c2.538 0 4.923.988 6.718 2.783S19 7.963 19 10.501s-.988 4.923-2.782 6.717A9.438 9.438 0 019.5 20zm0-18C4.813 2 1 5.813 1 10.5S4.813 19 9.5 19s8.5-3.813 8.5-8.5S14.187 2 9.5 2z" />
                <path d="M15 5.5a.5.5 0 11-1 0 .5.5 0 011 0zM14 7.5a.5.5 0 11-1 0 .5.5 0 011 0zM14 9.5a.5.5 0 11-1 0 .5.5 0 011 0zM14 11.5a.5.5 0 11-1 0 .5.5 0 011 0zM14 13.5a.5.5 0 11-1 0 .5.5 0 011 0zM15 15.5a.5.5 0 11-1 0 .5.5 0 011 0zM5 5.5a.5.5 0 11-1 0 .5.5 0 011 0zM6 7.5a.5.5 0 11-1 0 .5.5 0 011 0zM6 9.5a.5.5 0 11-1 0 .5.5 0 011 0zM6 11.5a.5.5 0 11-1 0 .5.5 0 011 0zM6 13.5a.5.5 0 11-1 0 .5.5 0 011 0zM5 15.5a.5.5 0 11-1 0 .5.5 0 011 0z" />
            </svg>
        </span>
    );
}

LiniBaseball.propTypes = {
    size: PropTypes.number.isRequired,
};
