import React from 'react';
import PropTypes from 'prop-types';

export default function LiniRefresh2({ size, ...props }) {
    let className = 'Component Lini LiniRefresh2';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M10 18c-2.137 0-4.146-.832-5.657-2.343S2 12.137 2 10s.832-4.146 2.343-5.657C5.854 2.832 7.863 2 10 2s4.146.832 5.657 2.343a7.947 7.947 0 012.341 5.452l1.149-1.149a.5.5 0 01.707.707l-2 2a.499.499 0 01-.854-.354v-1c0-3.86-3.14-7-7-7s-7 3.14-7 7 3.14 7 7 7a6.99 6.99 0 006.193-3.734.5.5 0 01.884.468A7.987 7.987 0 0110 17.999z" />
            </svg>
        </span>
    );
}

LiniRefresh2.propTypes = {
    size: PropTypes.number.isRequired,
};
