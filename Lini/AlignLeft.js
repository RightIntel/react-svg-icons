import React from 'react';
import PropTypes from 'prop-types';

export default function LiniAlignLeft({ size, ...props }) {
    let className = 'Component Lini LiniAlignLeft';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M.5 20a.5.5 0 01-.5-.5V.5a.5.5 0 011 0v19a.5.5 0 01-.5.5zM11.5 9h-8C2.673 9 2 8.327 2 7.5v-4C2 2.673 2.673 2 3.5 2h8c.827 0 1.5.673 1.5 1.5v4c0 .827-.673 1.5-1.5 1.5zm-8-6a.5.5 0 00-.5.5v4a.5.5 0 00.5.5h8a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5h-8zM17.5 18h-14c-.827 0-1.5-.673-1.5-1.5v-4c0-.827.673-1.5 1.5-1.5h14c.827 0 1.5.673 1.5 1.5v4c0 .827-.673 1.5-1.5 1.5zm-14-6a.5.5 0 00-.5.5v4a.5.5 0 00.5.5h14a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5h-14z" />
            </svg>
        </span>
    );
}

LiniAlignLeft.propTypes = {
    size: PropTypes.number.isRequired,
};