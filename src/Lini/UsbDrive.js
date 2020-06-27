import React from 'react';
import PropTypes from 'prop-types';

export default function LiniUsbDrive({ size, ...props }) {
    let className = 'Component Lini LiniUsbDrive';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M14 6.501V1c0-.551-.449-1-1-1H7c-.551 0-1 .449-1 1v5.501c-.607.457-1 1.182-1 1.999v9C5 18.878 6.122 20 7.5 20h5c1.378 0 2.5-1.122 2.5-2.5v-9c0-.816-.393-1.542-1-1.999zM7 1h6v5.05a2.501 2.501 0 00-.5-.05h-5c-.171 0-.338.017-.5.05V1zm7 16.5c0 .827-.673 1.5-1.5 1.5h-5c-.827 0-1.5-.673-1.5-1.5v-9C6 7.673 6.673 7 7.5 7h5c.827 0 1.5.673 1.5 1.5v9z" />
                <path d="M11.5 5a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5zM8.5 5a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5zM13 17.5a.5.5 0 11-1 0 .5.5 0 011 0z" />
            </svg>
        </span>
    );
}

LiniUsbDrive.propTypes = {
    size: PropTypes.number.isRequired,
};
