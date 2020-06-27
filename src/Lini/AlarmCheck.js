import React from 'react';
import PropTypes from 'prop-types';

export default function LiniAlarmCheck({ size, ...props }) {
    let className = 'Component Lini LiniAlarmCheck';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.442 4.591a.5.5 0 01-.49-.598 2.503 2.503 0 00-3.313-2.841.5.5 0 01-.345-.939 3.504 3.504 0 014.638 3.976.5.5 0 01-.49.402zM.56 4.605a.499.499 0 01-.489-.4A3.504 3.504 0 014.705.213a.5.5 0 01-.345.939 2.503 2.503 0 00-3.31 2.852.5.5 0 01-.491.6zM16.32 17.113A9.436 9.436 0 0019 10.5c0-2.538-.988-4.923-2.782-6.717S12.038 1 9.5 1c-2.538 0-4.923.988-6.717 2.783S.001 7.963.001 10.5c0 2.489.951 4.831 2.68 6.613L.647 19.147a.5.5 0 00.708.707l2.06-2.06C5.12 19.222 7.251 20 9.502 20s4.382-.778 6.087-2.206l2.06 2.06a.498.498 0 00.708 0 .5.5 0 000-.707l-2.034-2.034zM1 10.5C1 5.813 4.813 2 9.5 2S18 5.813 18 10.5 14.187 19 9.5 19 1 15.187 1 10.5z" />
                <path d="M7 14a.502.502 0 01-.354-.146l-2.5-2.5a.5.5 0 01.707-.707l2.146 2.146 6.146-6.146a.5.5 0 01.707.707l-6.5 6.5a.498.498 0 01-.354.146z" />
            </svg>
        </span>
    );
}

LiniAlarmCheck.propTypes = {
    size: PropTypes.number.isRequired,
};
