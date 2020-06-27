import React from 'react';
import PropTypes from 'prop-types';

export default function LiniEnter2({ size, ...props }) {
    let className = 'Component Lini LiniEnter2';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M9.5 20c-2.538 0-4.923-.988-6.718-2.782S0 13.038 0 10.501a.5.5 0 011 0c0 4.687 3.813 8.5 8.5 8.5s8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5a.5.5 0 010-1c2.538 0 4.923.988 6.717 2.783S19 7.964 19 10.502s-.988 4.923-2.782 6.717A9.438 9.438 0 019.5 20.001z" />
                <path d="M9.5 4a.5.5 0 00-.5.5v4.793L.854 1.147a.5.5 0 00-.707.707L8.293 10H3.5a.5.5 0 000 1h6a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5z" />
            </svg>
        </span>
    );
}

LiniEnter2.propTypes = {
    size: PropTypes.number.isRequired,
};
