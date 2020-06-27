import React from 'react';
import PropTypes from 'prop-types';

export default function LiniCrossSquare({ size, ...props }) {
    let className = 'Component Lini LiniCrossSquare';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M17.5 20h-16C.673 20 0 19.327 0 18.5v-16C0 1.673.673 1 1.5 1h16c.827 0 1.5.673 1.5 1.5v16c0 .827-.673 1.5-1.5 1.5zM1.5 2a.5.5 0 00-.5.5v16a.5.5 0 00.5.5h16a.5.5 0 00.5-.5v-16a.5.5 0 00-.5-.5h-16z" />
                <path d="M14.332 14.126l-4.08-3.626 4.08-3.626a.5.5 0 00-.664-.748L9.5 9.831 5.332 6.126a.5.5 0 10-.664.748l4.08 3.626-4.08 3.626a.5.5 0 00.664.748L9.5 11.169l4.168 3.705a.5.5 0 10.664-.748z" />
            </svg>
        </span>
    );
}

LiniCrossSquare.propTypes = {
    size: PropTypes.number.isRequired,
};
