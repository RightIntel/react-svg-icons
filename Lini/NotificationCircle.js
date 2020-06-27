import React from 'react';
import PropTypes from 'prop-types';

export default function LiniNotificationCircle({ size, ...props }) {
    let className = 'Component Lini LiniNotificationCircle';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M16.218 3.782C14.424 1.988 12.038 1 9.5 1s-4.923.988-6.718 2.782S0 7.962 0 10.499s.988 4.923 2.782 6.718 4.18 2.782 6.718 2.782 4.923-.988 6.718-2.782S19 13.037 19 10.499s-.988-4.923-2.782-6.717zM9.5 19C4.813 19 1 15.187 1 10.5S4.813 2 9.5 2c4.687 0 8.5 3.813 8.5 8.5S14.187 19 9.5 19z" />
                <path d="M9.5 18a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5zM9.5 15a.5.5 0 01-.5-.5v-10a.5.5 0 011 0v10a.5.5 0 01-.5.5z" />
            </svg>
        </span>
    );
}

LiniNotificationCircle.propTypes = {
    size: PropTypes.number.isRequired,
};
