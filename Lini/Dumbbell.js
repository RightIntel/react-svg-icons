import React from 'react';
import PropTypes from 'prop-types';

export default function LiniDumbbell({ size, ...props }) {
    let className = 'Component Lini LiniDumbbell';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M.5 12a.5.5 0 01-.5-.5v-2a.5.5 0 011 0v2a.5.5 0 01-.5.5zM19.5 12a.5.5 0 01-.5-.5v-2a.5.5 0 011 0v2a.5.5 0 01-.5.5zM17.5 7c-.175 0-.343.031-.5.086V6.5c0-.827-.673-1.5-1.5-1.5S14 5.673 14 6.5V10H6V6.5C6 5.673 5.327 5 4.5 5S3 5.673 3 6.5v.586A1.502 1.502 0 001 8.5v4a1.502 1.502 0 002 1.414v.586c0 .827.673 1.5 1.5 1.5S6 15.327 6 14.5V11h8v3.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5v-.586a1.502 1.502 0 002-1.414v-4c0-.827-.673-1.5-1.5-1.5zm-15 6a.5.5 0 01-.5-.5v-4a.5.5 0 011 0v4a.5.5 0 01-.5.5zM5 14.5a.5.5 0 01-1 0v-8a.5.5 0 011 0v8zm11 0a.5.5 0 01-1 0v-8a.5.5 0 011 0v8zm2-2a.5.5 0 01-1 0v-4a.5.5 0 011 0v4z" />
            </svg>
        </span>
    );
}

LiniDumbbell.propTypes = {
    size: PropTypes.number.isRequired,
};
