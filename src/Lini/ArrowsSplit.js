import React from 'react';
import PropTypes from 'prop-types';

export default function LiniArrowsSplit({ size, ...props }) {
    let className = 'Component Lini LiniArrowsSplit';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.5 1h-5a.5.5 0 000 1h3.793l-8.146 8.146a.5.5 0 00-.146.354v9a.5.5 0 001 0v-8.793l8-8V6.5a.5.5 0 001 0v-5a.5.5 0 00-.5-.5zM7.854 8.146L1.708 2h3.793a.5.5 0 000-1h-5a.5.5 0 00-.5.5v5a.5.5 0 001 0V2.707l6.146 6.146a.498.498 0 00.708 0 .5.5 0 000-.707z" />
            </svg>
        </span>
    );
}

LiniArrowsSplit.propTypes = {
    size: PropTypes.number.isRequired,
};
