import React from 'react';
import PropTypes from 'prop-types';

export default function LiniBus2({ size, ...props }) {
    let className = 'Component Lini LiniBus2';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M5.5 16c-.827 0-1.5-.673-1.5-1.5S4.673 13 5.5 13s1.5.673 1.5 1.5S6.327 16 5.5 16zm0-2a.5.5 0 100 1 .5.5 0 000-1zM14.5 16c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1zM13.5 5h-7a.5.5 0 010-1h7a.5.5 0 010 1zM15.5 6h-11a.5.5 0 00-.5.5v5a.5.5 0 00.5.5H15.5a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5zM5 7h10v4h-.349l-2.874-1.916a.5.5 0 10-.554.832L12.849 11H9.652L6.778 9.084a.5.5 0 10-.554.832L7.85 11H5.001V7z" />
                <path d="M15.616 1.783C14.253 1.264 12.363 1 10 1s-4.252.263-5.616.783C2.413 2.534 2 3.675 2 4.5v11c0 1.207.86 2.217 2 2.45V19c0 .551.449 1 1 1h1c.551 0 1-.449 1-1v-1h6v1c0 .551.449 1 1 1h1c.551 0 1-.449 1-1v-1.05c1.14-.232 2-1.242 2-2.45v-11c0-.825-.414-1.966-2.384-2.717zM6 19H5v-1h1v1zm8 0v-1h1v1h-1zm3-3.5c0 .827-.673 1.5-1.5 1.5h-11c-.827 0-1.5-.673-1.5-1.5v-11c0-.743.586-1.343 1.741-1.783C5.973 2.248 7.791 2 10 2s4.028.248 5.259.717C16.414 3.157 17 3.757 17 4.5v11z" />
            </svg>
        </span>
    );
}

LiniBus2.propTypes = {
    size: PropTypes.number.isRequired,
};
