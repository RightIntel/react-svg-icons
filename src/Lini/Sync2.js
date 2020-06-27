import React from 'react';
import PropTypes from 'prop-types';

export default function LiniSync2({ size, ...props }) {
    let className = 'Component Lini LiniSync2';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M17.5 11.5a.5.5 0 01-.5-.5v-1c0-3.86-3.14-7-7-7a6.99 6.99 0 00-6.193 3.734.5.5 0 01-.884-.468A7.987 7.987 0 0110 2c2.137 0 4.146.832 5.657 2.343a7.947 7.947 0 012.341 5.452l1.149-1.149a.5.5 0 01.707.707l-2 2a.5.5 0 01-.354.146zM10 18a7.948 7.948 0 01-5.657-2.343 7.947 7.947 0 01-2.341-5.452L.853 11.354a.5.5 0 01-.707-.707l2-2A.499.499 0 013 9.001v1c0 3.86 3.14 7 7 7a6.99 6.99 0 006.193-3.734.5.5 0 01.884.468A7.987 7.987 0 0110 18.001z" />
            </svg>
        </span>
    );
}

LiniSync2.propTypes = {
    size: PropTypes.number.isRequired,
};
