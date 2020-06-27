import React from 'react';
import PropTypes from 'prop-types';

export default function LiniPlatter({ size, ...props }) {
    let className = 'Component Lini LiniPlatter';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.5 17H.5a.5.5 0 010-1h18a.5.5 0 010 1zM18 14.474a8.44 8.44 0 00-2.49-5.984A8.438 8.438 0 0010 6.015V5h.5a.5.5 0 000-1h-2a.5.5 0 000 1H9v1.015A8.438 8.438 0 003.49 8.49 8.446 8.446 0 001 14.5a.5.5 0 00.5.5h16.001a.5.5 0 00.5-.5L18 14.474zM2.016 14c.258-3.903 3.516-7 7.484-7s7.225 3.097 7.484 7H2.017z" />
                <path d="M4.626 11.5a.5.5 0 01-.406-.792A6.504 6.504 0 018.417 8.09a.5.5 0 01.166.986 5.467 5.467 0 00-3.551 2.216.5.5 0 01-.406.208z" />
            </svg>
        </span>
    );
}

LiniPlatter.propTypes = {
    size: PropTypes.number.isRequired,
};
