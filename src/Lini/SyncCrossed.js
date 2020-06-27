import React from 'react';
import PropTypes from 'prop-types';

export default function LiniSyncCrossed({ size, ...props }) {
    let className = 'Component Lini LiniSyncCrossed';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M19.854 8.646a.5.5 0 00-.707 0l-1.149 1.149a7.94 7.94 0 00-2.341-5.452l-.05-.049 1.271-1.467a.5.5 0 00-.755-.655l-1.27 1.466A7.941 7.941 0 0010.001 2a7.988 7.988 0 00-7.077 4.266.5.5 0 00.884.468A6.99 6.99 0 0110.001 3c1.571 0 3.024.521 4.193 1.398L5.052 14.946a6.978 6.978 0 01-2.048-4.736l1.143 1.143a.498.498 0 00.708 0 .5.5 0 000-.707l-2-2a.5.5 0 00-.707 0l-2 2a.5.5 0 00.707.707l1.149-1.149a7.94 7.94 0 002.341 5.452l.05.049-1.271 1.467a.5.5 0 10.755.654l1.27-1.466a7.941 7.941 0 004.852 1.638 7.988 7.988 0 007.077-4.266.5.5 0 00-.884-.468 6.99 6.99 0 01-6.193 3.734A6.965 6.965 0 015.808 15.6L14.95 5.052a6.978 6.978 0 012.048 4.736l-1.143-1.143a.5.5 0 00-.707.707l2 2a.498.498 0 00.708 0l2-2a.5.5 0 000-.707z" />
            </svg>
        </span>
    );
}

LiniSyncCrossed.propTypes = {
    size: PropTypes.number.isRequired,
};
