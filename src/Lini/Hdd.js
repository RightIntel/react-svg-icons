import React from 'react';
import PropTypes from 'prop-types';

export default function LiniHdd({ size, ...props }) {
    let className = 'Component Lini LiniHdd';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M17.5 20h-16C.673 20 0 19.327 0 18.5v-3c0-.627.22-1.557.5-2.118l2.106-4.211C2.934 8.514 3.766 8 4.5 8h10c.734 0 1.566.514 1.894 1.171l2.106 4.211c.28.561.5 1.491.5 2.118v3c0 .827-.673 1.5-1.5 1.5zM4.5 9c-.362 0-.838.295-1 .618l-2.106 4.211C1.184 14.249 1 15.03 1 15.5v3a.5.5 0 00.5.5h16a.5.5 0 00.5-.5v-3c0-.47-.184-1.251-.394-1.671L15.5 9.618c-.162-.323-.638-.618-1-.618h-10z" />
                <path d="M16.5 18h-1a.5.5 0 010-1h1a.5.5 0 010 1zM16.5 16h-14a.5.5 0 010-1h14a.5.5 0 010 1z" />
            </svg>
        </span>
    );
}

LiniHdd.propTypes = {
    size: PropTypes.number.isRequired,
};
