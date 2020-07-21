import React from 'react';
import PropTypes from 'prop-types';

export default function LiniPowerSwitch({ size, ...props }) {
    let className = 'Component Lini LiniPowerSwitch';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M9.5 12a.5.5 0 01-.5-.5v-9a.5.5 0 011 0v9a.5.5 0 01-.5.5z" />
                <path d="M9.5 19c-2.003 0-3.887-.78-5.303-2.197S2 13.503 2 11.5c0-1.648.525-3.212 1.517-4.523a7.557 7.557 0 013.84-2.666.5.5 0 11.285.959c-2.733.814-4.643 3.376-4.643 6.231 0 3.584 2.916 6.5 6.5 6.5s6.5-2.916 6.5-6.5c0-2.855-1.909-5.417-4.643-6.231a.5.5 0 01.285-.959 7.552 7.552 0 013.84 2.666 7.431 7.431 0 011.517 4.523c0 2.003-.78 3.887-2.197 5.303S11.501 19 9.498 19z" />
            </svg>
        </span>
    );
}

LiniPowerSwitch.propTypes = {
    size: PropTypes.number.isRequired,
};