import React from 'react';
import PropTypes from 'prop-types';

export default function LiniPortrait2({ size, ...props }) {
    let className = 'Component Lini LiniPortrait2';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.5 20h-17C.673 20 0 19.327 0 18.5v-17C0 .673.673 0 1.5 0h17c.827 0 1.5.673 1.5 1.5v17c0 .827-.673 1.5-1.5 1.5zM1.5 1a.5.5 0 00-.5.5v17a.5.5 0 00.5.5h17a.5.5 0 00.5-.5v-17a.5.5 0 00-.5-.5h-17z" />
                <path d="M17.5 2h-15a.5.5 0 00-.5.5v12a.5.5 0 00.5.5h15a.5.5 0 00.5-.5v-12a.5.5 0 00-.5-.5zM7.536 14c.506-.664 1.331-1 2.464-1s1.959.336 2.464 1H7.536zM17 14h-3.373c-.418-.864-1.393-2-3.627-2s-3.209 1.136-3.627 2H3V3h14v11z" />
                <path d="M10 11c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2zM17.5 18h-7a.5.5 0 010-1h7a.5.5 0 010 1z" />
            </svg>
        </span>
    );
}

LiniPortrait2.propTypes = {
    size: PropTypes.number.isRequired,
};
