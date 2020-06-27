import React from 'react';
import PropTypes from 'prop-types';

export default function LiniPicture({ size, ...props }) {
    let className = 'Component Lini LiniPicture';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M13.5 9C12.122 9 11 7.878 11 6.5S12.122 4 13.5 4 16 5.122 16 6.5 14.878 9 13.5 9zm0-4c-.827 0-1.5.673-1.5 1.5S12.673 8 13.5 8 15 7.327 15 6.5 14.327 5 13.5 5z" />
                <path d="M18.5 0h-17C.673 0 0 .673 0 1.5v17c0 .827.673 1.5 1.5 1.5h17c.827 0 1.5-.673 1.5-1.5v-17c0-.827-.673-1.5-1.5-1.5zM1 18.5v-4.807l4.197-4.617c.085-.093.196-.145.314-.147s.231.048.318.139l9.5 9.932H1.499a.5.5 0 01-.5-.5zm18 0a.5.5 0 01-.5.5h-1.786L6.553 8.377a1.42 1.42 0 00-2.095.027l-3.457 3.803V1.5a.5.5 0 01.5-.5h17a.5.5 0 01.5.5v17z" />
            </svg>
        </span>
    );
}

LiniPicture.propTypes = {
    size: PropTypes.number.isRequired,
};
