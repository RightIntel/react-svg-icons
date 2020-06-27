import React from 'react';
import PropTypes from 'prop-types';

export default function LiniCashYen({ size, ...props }) {
    let className = 'Component Lini LiniCashYen';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.5 18H.5a.5.5 0 01-.5-.5v-10A.5.5 0 01.5 7h18a.5.5 0 01.5.5v10a.5.5 0 01-.5.5zM1 17h17V8H1v9zM17.5 6h-16a.5.5 0 010-1h16a.5.5 0 010 1zM16.5 4h-14a.5.5 0 010-1h14a.5.5 0 010 1z" />
                <path d="M11.5 13a.5.5 0 000-1h-1.066l1.482-2.223a.5.5 0 10-.832-.554L9.5 11.599 7.916 9.223a.5.5 0 10-.832.554L8.566 12H7.5a.5.5 0 000 1H9v1H7.5a.5.5 0 000 1H9v.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H10v-1h1.5z" />
            </svg>
        </span>
    );
}

LiniCashYen.propTypes = {
    size: PropTypes.number.isRequired,
};
