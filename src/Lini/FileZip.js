import React from 'react';
import PropTypes from 'prop-types';

export default function LiniFileZip({ size, ...props }) {
    let className = 'Component Lini LiniFileZip';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M17.854 5.646l-4.5-4.5A.5.5 0 0013 1H3.5C2.673 1 2 1.673 2 2.5v16c0 .827.673 1.5 1.5 1.5h13c.827 0 1.5-.673 1.5-1.5V6a.504.504 0 00-.146-.354zM16.793 6H13.5a.5.5 0 01-.5-.5V2.207L16.793 6zM16.5 19h-13a.5.5 0 01-.5-.5v-16a.5.5 0 01.5-.5H12v3.5c0 .827.673 1.5 1.5 1.5H17v11.5a.5.5 0 01-.5.5z" />
                <path d="M6.5 4h-1a.5.5 0 010-1h1a.5.5 0 010 1zM7.5 5h-1a.5.5 0 010-1h1a.5.5 0 010 1zM6.5 6h-1a.5.5 0 010-1h1a.5.5 0 010 1zM7.5 7h-1a.5.5 0 010-1h1a.5.5 0 010 1zM6.5 8h-1a.5.5 0 010-1h1a.5.5 0 010 1zM7.5 9h-1a.5.5 0 010-1h1a.5.5 0 010 1zM6.5 10c-.827 0-1.5.673-1.5 1.5v4c0 .827.673 1.5 1.5 1.5S8 16.327 8 15.5v-4c0-.827-.673-1.5-1.5-1.5zm0 1a.5.5 0 01.5.5v.5H6v-.5a.5.5 0 01.5-.5zm0 5a.5.5 0 01-.5-.5V13h1v2.5a.5.5 0 01-.5.5zM7.5 3h-1a.5.5 0 010-1h1a.5.5 0 010 1zM6.5 10h-1a.5.5 0 010-1h1a.5.5 0 010 1z" />
            </svg>
        </span>
    );
}

LiniFileZip.propTypes = {
    size: PropTypes.number.isRequired,
};
