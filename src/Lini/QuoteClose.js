import React from 'react';
import PropTypes from 'prop-types';

export default function LiniQuoteClose({ size, ...props }) {
    let className = 'Component Lini LiniQuoteClose';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M4.5 13c.924 0 1.783-.28 2.499-.759A7.505 7.505 0 01.5 16a.5.5 0 000 1c2.27 0 4.405-.884 6.01-2.49S9 10.77 9 8.5C9 6.019 6.981 4 4.5 4S0 6.019 0 8.5 2.019 13 4.5 13zm0-8C6.43 5 8 6.57 8 8.5l-.001.09A3.505 3.505 0 014.5 12C2.57 12 1 10.43 1 8.5S2.57 5 4.5 5zM11.5 16a.5.5 0 000 1c2.27 0 4.405-.884 6.01-2.49S20 10.77 20 8.5C20 6.019 17.981 4 15.5 4S11 6.019 11 8.5s2.019 4.5 4.5 4.5c.924 0 1.783-.28 2.499-.759A7.505 7.505 0 0111.5 16zm4-4c-1.93 0-3.5-1.57-3.5-3.5S13.57 5 15.5 5 19 6.57 19 8.5l-.001.09A3.505 3.505 0 0115.5 12z" />
            </svg>
        </span>
    );
}

LiniQuoteClose.propTypes = {
    size: PropTypes.number.isRequired,
};
