import React from 'react';
import PropTypes from 'prop-types';

export default function LiniCli({ size, ...props }) {
    let className = 'Component Lini LiniCli';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.5 18h-17C.673 18 0 17.327 0 16.5v-13C0 2.673.673 2 1.5 2h17c.827 0 1.5.673 1.5 1.5v13c0 .827-.673 1.5-1.5 1.5zM1.5 3a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h17a.5.5 0 00.5-.5v-13a.5.5 0 00-.5-.5h-17z" />
                <path d="M3.5 10a.5.5 0 01-.278-.916L5.598 7.5 3.222 5.916a.5.5 0 11.554-.832l3 2a.501.501 0 010 .832l-3 2a.497.497 0 01-.277.084zM11.5 10h-3a.5.5 0 010-1h3a.5.5 0 010 1z" />
            </svg>
        </span>
    );
}

LiniCli.propTypes = {
    size: PropTypes.number.isRequired,
};
