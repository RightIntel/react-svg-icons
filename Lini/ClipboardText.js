import React from 'react';
import PropTypes from 'prop-types';

export default function LiniClipboardText({ size, ...props }) {
    let className = 'Component Lini LiniClipboardText';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M16.5 20h-14c-.827 0-1.5-.673-1.5-1.5v-14C1 3.673 1.673 3 2.5 3h1a.5.5 0 010 1h-1a.5.5 0 00-.5.5v14a.5.5 0 00.5.5h14a.5.5 0 00.5-.5v-14a.5.5 0 00-.5-.5h-1a.5.5 0 010-1h1c.827 0 1.5.673 1.5 1.5v14c0 .827-.673 1.5-1.5 1.5z" />
                <path d="M13.501 5H5.5a.5.5 0 01-.5-.5c0-1.005.453-1.786 1.276-2.197.275-.138.547-.213.764-.254C7.253.885 8.275 0 9.499 0s2.246.885 2.459 2.049c.218.041.489.116.764.254.816.408 1.268 1.178 1.276 2.17l.001.027a.5.5 0 01-.5.5zM6.06 4h6.88a1.21 1.21 0 00-.638-.79c-.389-.203-.8-.21-.805-.21A.498.498 0 0111 2.5c0-.827-.673-1.5-1.5-1.5S8 1.673 8 2.5a.5.5 0 01-.5.5c-.001 0-.413.007-.802.21A1.208 1.208 0 006.06 4z" />
                <path d="M9.5 3c-.132 0-.261-.053-.353-.147S9 2.631 9 2.5a.498.498 0 01.5-.5.498.498 0 01.5.5.5.5 0 01-.5.5zM14.5 8h-10a.5.5 0 010-1h10a.5.5 0 010 1zM12.5 11h-8a.5.5 0 010-1h8a.5.5 0 010 1zM14.5 13h-10a.5.5 0 010-1h10a.5.5 0 010 1zM14.5 15h-10a.5.5 0 010-1h10a.5.5 0 010 1zM9.5 17h-5a.5.5 0 010-1h5a.5.5 0 010 1z" />
            </svg>
        </span>
    );
}

LiniClipboardText.propTypes = {
    size: PropTypes.number.isRequired,
};