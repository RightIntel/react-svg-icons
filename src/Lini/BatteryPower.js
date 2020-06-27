import React from 'react';
import PropTypes from 'prop-types';

export default function LiniBatteryPower({ size, ...props }) {
    let className = 'Component Lini LiniBatteryPower';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M17.5 8H17V6.5c0-.827-.673-1.5-1.5-1.5h-14C.673 5 0 5.673 0 6.5v8c0 .827.673 1.5 1.5 1.5h14c.827 0 1.5-.673 1.5-1.5V13h.5c.827 0 1.5-.673 1.5-1.5v-2c0-.827-.673-1.5-1.5-1.5zM16 14.5a.5.5 0 01-.5.5h-14a.5.5 0 01-.5-.5V11h4.05c.232 1.14 1.242 2 2.45 2h2a.5.5 0 00.5-.5V12h1.5a.5.5 0 000-1H10v-1h1.5a.5.5 0 000-1H10v-.5a.5.5 0 00-.5-.5h-2c-1.207 0-2.217.86-2.45 2H1V6.5a.5.5 0 01.5-.5h14a.5.5 0 01.5.5v8zM9 12H7.5c-.827 0-1.5-.673-1.5-1.5S6.673 9 7.5 9H9v3zm9-.5a.5.5 0 01-.5.5H17V9h.5a.5.5 0 01.5.5v2z" />
            </svg>
        </span>
    );
}

LiniBatteryPower.propTypes = {
    size: PropTypes.number.isRequired,
};
