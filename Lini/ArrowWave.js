import React from 'react';
import PropTypes from 'prop-types';

export default function LiniArrowWave({ size, ...props }) {
    let className = 'Component Lini LiniArrowWave';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.854 13.646a.5.5 0 00-.707 0l-2.146 2.146V6.499c0-1.93-1.57-3.5-3.5-3.5s-3.5 1.57-3.5 3.5v8c0 1.378-1.122 2.5-2.5 2.5s-2.5-1.122-2.5-2.5V5.206l2.146 2.146a.498.498 0 00.708 0 .5.5 0 000-.707l-3-3a.5.5 0 00-.707 0l-3 3a.5.5 0 00.707.707l2.146-2.146v9.293c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5v-8c0-1.378 1.122-2.5 2.5-2.5s2.5 1.122 2.5 2.5v9.293l-2.146-2.147a.5.5 0 00-.707.707l3 3a.5.5 0 00.708 0l3-3a.5.5 0 000-.707z" />
            </svg>
        </span>
    );
}

LiniArrowWave.propTypes = {
    size: PropTypes.number.isRequired,
};
