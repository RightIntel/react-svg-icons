import React from 'react';
import PropTypes from 'prop-types';

export default function LiniRedo2({ size, ...props }) {
    let className = 'Component Lini LiniRedo2';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M2.49 4.49C4.095 2.885 6.23 2 8.5 2s4.405.884 6.01 2.49S17 8.23 17 10.5v1.293l2.146-2.146a.5.5 0 01.707.707l-3 3a.498.498 0 01-.708 0l-3-3a.5.5 0 01.707-.707l2.146 2.146V10.5c0-4.136-3.364-7.5-7.5-7.5s-7.5 3.364-7.5 7.5 3.364 7.5 7.5 7.5a.5.5 0 010 1c-2.27 0-4.405-.884-6.01-2.49s-2.49-3.74-2.49-6.01c0-2.27.884-4.405 2.49-6.01z" />
            </svg>
        </span>
    );
}

LiniRedo2.propTypes = {
    size: PropTypes.number.isRequired,
};