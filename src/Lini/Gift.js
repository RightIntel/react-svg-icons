import React from 'react';
import PropTypes from 'prop-types';

export default function LiniGift({ size, ...props }) {
    let className = 'Component Lini LiniGift';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.5 5h-3.001c.315-.418.501-.938.501-1.5C16 2.122 14.878 1 13.5 1c-1.39 0-2.556 1.101-3.127 1.758A7.331 7.331 0 009.5 3.993a7.372 7.372 0 00-.873-1.235C8.056 2.102 6.89 1 5.5 1A2.503 2.503 0 003 3.5c0 .562.187 1.082.501 1.5H.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5H1v9.5c0 .827.673 1.5 1.5 1.5h14c.827 0 1.5-.673 1.5-1.5V9h.5a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zm-7.373-1.586C11.909 2.515 12.774 2 13.5 2c.827 0 1.5.673 1.5 1.5S14.327 5 13.5 5h-3.378c.173-.442.523-1.032 1.005-1.586zM11 19H8V6h3v13zM4 3.5C4 2.673 4.673 2 5.5 2c.726 0 1.591.515 2.373 1.414.482.554.832 1.144 1.005 1.586H5.5C4.673 5 4 4.327 4 3.5zM1 6h6v2H1V6zm1 12.5V9h5v10H2.5a.5.5 0 01-.5-.5zm15 0a.5.5 0 01-.5.5H12V9h5v9.5zM18 8h-6V6h6v2z" />
            </svg>
        </span>
    );
}

LiniGift.propTypes = {
    size: PropTypes.number.isRequired,
};
