import React from 'react';
import PropTypes from 'prop-types';

export default function LiniPercentSquare({ size, ...props }) {
    let className = 'Component Lini LiniPercentSquare';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M17.5 20h-16C.673 20 0 19.327 0 18.5v-16C0 1.673.673 1 1.5 1h16c.827 0 1.5.673 1.5 1.5v16c0 .827-.673 1.5-1.5 1.5zM1.5 2a.5.5 0 00-.5.5v16a.5.5 0 00.5.5h16a.5.5 0 00.5-.5v-16a.5.5 0 00-.5-.5h-16z" />
                <path d="M5 16a.5.5 0 01-.371-.834l9-10a.5.5 0 11.743.669l-9 10a.499.499 0 01-.372.166zM6.5 10C5.122 10 4 8.878 4 7.5S5.122 5 6.5 5 9 6.122 9 7.5 7.878 10 6.5 10zm0-4C5.673 6 5 6.673 5 7.5S5.673 9 6.5 9 8 8.327 8 7.5 7.327 6 6.5 6zM12.5 16c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5zm0-4c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z" />
            </svg>
        </span>
    );
}

LiniPercentSquare.propTypes = {
    size: PropTypes.number.isRequired,
};
