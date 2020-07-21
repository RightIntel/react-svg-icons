import React from 'react';
import PropTypes from 'prop-types';

export default function LiniFiles({ size, ...props }) {
    let className = 'Component Lini LiniFiles';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M16.5 4H16v-.5c0-.827-.673-1.5-1.5-1.5H14v-.5c0-.827-.673-1.5-1.5-1.5H5a.504.504 0 00-.354.146l-3.5 3.5A.5.5 0 001 4v10.5c0 .827.673 1.5 1.5 1.5H3v.5c0 .827.673 1.5 1.5 1.5H5v.5c0 .827.673 1.5 1.5 1.5h10c.827 0 1.5-.673 1.5-1.5v-13c0-.827-.673-1.5-1.5-1.5zM5 1.207V3.5a.5.5 0 01-.5.5H2.207L5 1.207zM2 14.5V5h2.5C5.327 5 6 4.327 6 3.5V1h6.5a.5.5 0 01.5.5v13a.5.5 0 01-.5.5h-10a.5.5 0 01-.5-.5zm2 2V16h8.5c.827 0 1.5-.673 1.5-1.5V3h.5a.5.5 0 01.5.5v13a.5.5 0 01-.5.5h-10a.5.5 0 01-.5-.5zm13 2a.5.5 0 01-.5.5h-10a.5.5 0 01-.5-.5V18h8.5c.827 0 1.5-.673 1.5-1.5V5h.5a.5.5 0 01.5.5v13z" />
            </svg>
        </span>
    );
}

LiniFiles.propTypes = {
    size: PropTypes.number.isRequired,
};