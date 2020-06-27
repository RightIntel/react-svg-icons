import React from 'react';
import PropTypes from 'prop-types';

export default function LiniMan2({ size, ...props }) {
    let className = 'Component Lini LiniMan2';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M9.5 5C8.122 5 7 3.878 7 2.5S8.122 0 9.5 0 12 1.122 12 2.5 10.878 5 9.5 5zm0-4C8.673 1 8 1.673 8 2.5S8.673 4 9.5 4 11 3.327 11 2.5 10.327 1 9.5 1zM12.5 6h-6C5.673 6 5 6.673 5 7.5v4a1.502 1.502 0 002 1.414V18.5a1.502 1.502 0 002.5 1.117A1.502 1.502 0 0012 18.5v-5.586a1.502 1.502 0 002-1.414v-4c0-.827-.673-1.5-1.5-1.5zm.5 5.5a.5.5 0 01-1 0v-3a.5.5 0 00-1 0v10a.5.5 0 01-1 0v-6a.5.5 0 00-1 0v6a.5.5 0 01-1 0v-10a.5.5 0 00-1 0v3a.5.5 0 01-1 0v-4a.5.5 0 01.5-.5h6a.5.5 0 01.5.5v4z" />
            </svg>
        </span>
    );
}

LiniMan2.propTypes = {
    size: PropTypes.number.isRequired,
};
