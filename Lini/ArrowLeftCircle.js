import React from 'react';
import PropTypes from 'prop-types';

export default function LiniArrowLeftCircle({ size, ...props }) {
    let className = 'Component Lini LiniArrowLeftCircle';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M2.782 3.782C4.576 1.988 6.962 1 9.5 1s4.923.988 6.718 2.782S19 7.962 19 10.499s-.988 4.923-2.782 6.718-4.18 2.782-6.718 2.782-4.923-.988-6.718-2.782S0 13.037 0 10.499s.988-4.923 2.782-6.717zM9.5 19c4.687 0 8.5-3.813 8.5-8.5S14.187 2 9.5 2C4.813 2 1 5.813 1 10.5S4.813 19 9.5 19z" />
                <path d="M3.647 10.147l4-4a.5.5 0 01.707.707L5.207 10H15.5a.5.5 0 010 1H5.207l3.146 3.147a.5.5 0 01-.706.706l-4-4a.5.5 0 010-.707z" />
            </svg>
        </span>
    );
}

LiniArrowLeftCircle.propTypes = {
    size: PropTypes.number.isRequired,
};