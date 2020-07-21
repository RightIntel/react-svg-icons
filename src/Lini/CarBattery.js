import React from 'react';
import PropTypes from 'prop-types';

export default function LiniCarBattery({ size, ...props }) {
    let className = 'Component Lini LiniCarBattery';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M19.5 5H18V3.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5V5H6V3.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5V5H.5a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h19a.5.5 0 00.5-.5v-11a.5.5 0 00-.5-.5zM15 4h2v1h-2V4zM3 4h2v1H3V4zm16 12H1V6h18v10z" />
                <path d="M16.5 10H15V8.5a.5.5 0 00-1 0V10h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V11h1.5a.5.5 0 000-1zM7.5 11h-4a.5.5 0 010-1h4a.5.5 0 010 1z" />
            </svg>
        </span>
    );
}

LiniCarBattery.propTypes = {
    size: PropTypes.number.isRequired,
};