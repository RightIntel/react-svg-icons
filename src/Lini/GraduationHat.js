import React from 'react';
import PropTypes from 'prop-types';

export default function LiniGraduationHat({ size, ...props }) {
    let className = 'Component Lini LiniGraduationHat';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.658 7.026l-9-3a.502.502 0 00-.316 0l-9 3a.5.5 0 000 .948L3 8.86v2.64c0 .133.053.26.146.354C3.234 11.942 5.34 14 9.5 14c1.513 0 2.924-.272 4.195-.809a.5.5 0 00-.389-.921c-1.147.485-2.427.73-3.805.73-1.945 0-3.376-.504-4.234-.926a6.603 6.603 0 01-1.266-.799V9.194l5.342 1.781a.503.503 0 00.316 0l5.342-1.781v.892c-.582.206-1 .762-1 1.414 0 .611.367 1.137.892 1.371l-.877 3.508a.5.5 0 00.485.621h2a.5.5 0 00.485-.621l-.877-3.508c.525-.234.892-.76.892-1.371 0-.652-.418-1.208-1-1.414V8.86l2.658-.886a.5.5 0 000-.948zM15.5 11a.5.5 0 110 1 .5.5 0 010-1zm-.36 5l.36-1.438.36 1.438h-.719zm.32-8.014l-5.877-.98a.5.5 0 10-.164.986l4.014.669-3.932 1.311-7.419-2.473 7.419-2.473 7.419 2.473-1.459.486z" />
            </svg>
        </span>
    );
}

LiniGraduationHat.propTypes = {
    size: PropTypes.number.isRequired,
};