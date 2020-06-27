import React from 'react';
import PropTypes from 'prop-types';

export default function LiniReturn({ size, ...props }) {
    let className = 'Component Lini LiniReturn';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M10 20c-3.67 0-7.039-2.005-8.793-5.233a.5.5 0 11.879-.477A9.002 9.002 0 0010 19c4.963 0 9-4.037 9-9s-4.037-9-9-9a8.995 8.995 0 00-7.928 4.737.501.501 0 01-.929-.343l.869-4a.501.501 0 01.977.212l-.353 1.627A9.991 9.991 0 0110.001 0c2.671 0 5.182 1.04 7.071 2.929s2.929 4.4 2.929 7.071c0 2.671-1.04 5.182-2.929 7.071S12.672 20 10.001 20z" />
            </svg>
        </span>
    );
}

LiniReturn.propTypes = {
    size: PropTypes.number.isRequired,
};
