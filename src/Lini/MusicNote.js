import React from 'react';
import PropTypes from 'prop-types';

export default function LiniMusicNote({ size, ...props }) {
    let className = 'Component Lini LiniMusicNote';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M13.5 5A2.503 2.503 0 0111 2.5a.5.5 0 00-1 0v12.399a3.965 3.965 0 00-.448-.26C8.728 14.227 7.645 14 6.5 14s-2.228.227-3.052.639C2.514 15.106 2 15.767 2 16.5s.514 1.395 1.448 1.861c.824.412 1.907.639 3.052.639s2.228-.227 3.052-.639C10.486 17.894 11 17.233 11 16.5V4.947A3.492 3.492 0 0013.5 6C14.878 6 16 7.122 16 8.5a.5.5 0 001 0C17 6.57 15.43 5 13.5 5zm-7 13C4.497 18 3 17.208 3 16.5S4.497 15 6.5 15s3.5.792 3.5 1.5S8.503 18 6.5 18z" />
            </svg>
        </span>
    );
}

LiniMusicNote.propTypes = {
    size: PropTypes.number.isRequired,
};
