import React from 'react';
import PropTypes from 'prop-types';

export default function LiniLastCircle({ size, ...props }) {
    let className = 'Component Lini LiniLastCircle';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M9.5 20c-2.538 0-4.923-.988-6.718-2.782S0 13.038 0 10.501s.988-4.923 2.782-6.718S6.962 1 9.5 1s4.923.988 6.718 2.783S19 7.963 19 10.501c0 2.538-.988 4.923-2.782 6.717S12.038 20 9.5 20zm0-18C4.813 2 1 5.813 1 10.5S4.813 19 9.5 19c4.687 0 8.5-3.813 8.5-8.5S14.187 2 9.5 2z" />
                <path d="M9.5 15a.5.5 0 01-.5-.5v-8a.5.5 0 01.9-.3l3 4a.501.501 0 010 .6l-3 4a.501.501 0 01-.4.2zm.5-7v5l1.875-2.5L10 8z" />
                <path d="M13.5 15a.5.5 0 01-.5-.5v-8a.5.5 0 011 0v8a.5.5 0 01-.5.5zM5.5 15a.5.5 0 01-.5-.5v-8a.5.5 0 01.9-.3l3 4a.501.501 0 010 .6l-3 4a.501.501 0 01-.4.2zM6 8v5l1.875-2.5L6 8z" />
            </svg>
        </span>
    );
}

LiniLastCircle.propTypes = {
    size: PropTypes.number.isRequired,
};
