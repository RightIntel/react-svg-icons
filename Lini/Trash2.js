import React from 'react';
import PropTypes from 'prop-types';

export default function LiniTrash2({ size, ...props }) {
    let className = 'Component Lini LiniTrash2';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M15.5 2H12v-.5c0-.827-.673-1.5-1.5-1.5h-2C7.673 0 7 .673 7 1.5V2H3.5C2.673 2 2 2.673 2 3.5v1c0 .652.418 1.208 1 1.414V18.5c0 .827.673 1.5 1.5 1.5h10c.827 0 1.5-.673 1.5-1.5V5.914c.582-.206 1-.762 1-1.414v-1c0-.827-.673-1.5-1.5-1.5zM8 1.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5V2H8v-.5zM14.5 19h-10a.5.5 0 01-.5-.5V6h11v12.5a.5.5 0 01-.5.5zM16 4.5a.5.5 0 01-.5.5h-12a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h12a.5.5 0 01.5.5v1z" />
                <path d="M12.5 7a.5.5 0 00-.5.5v10a.5.5 0 001 0v-10a.5.5 0 00-.5-.5zM9.5 7a.5.5 0 00-.5.5v10a.5.5 0 001 0v-10a.5.5 0 00-.5-.5zM6.5 7a.5.5 0 00-.5.5v10a.5.5 0 001 0v-10a.5.5 0 00-.5-.5z" />
            </svg>
        </span>
    );
}

LiniTrash2.propTypes = {
    size: PropTypes.number.isRequired,
};