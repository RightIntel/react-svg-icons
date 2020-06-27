import React from 'react';
import PropTypes from 'prop-types';

export default function LiniPlaylist({ size, ...props }) {
    let className = 'Component Lini LiniPlaylist';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M16.5 6A2.503 2.503 0 0114 3.5a.5.5 0 00-1 0v12.399a3.965 3.965 0 00-.448-.26C11.728 15.227 10.645 15 9.5 15s-2.228.227-3.052.639C5.514 16.106 5 16.767 5 17.5s.514 1.395 1.448 1.861c.824.412 1.907.639 3.052.639s2.228-.227 3.052-.639C13.486 18.894 14 18.233 14 17.5V5.947A3.492 3.492 0 0016.5 7C17.878 7 19 8.122 19 9.5a.5.5 0 001 0C20 7.57 18.43 6 16.5 6zm-7 13C7.497 19 6 18.208 6 17.5S7.497 16 9.5 16s3.5.792 3.5 1.5S11.503 19 9.5 19z" />
                <path d="M10.5 13H.5a.5.5 0 010-1h10a.5.5 0 010 1zM10.5 10H.5a.5.5 0 010-1h10a.5.5 0 010 1zM10.5 7H.5a.5.5 0 010-1h10a.5.5 0 010 1zM10.5 4H.5a.5.5 0 010-1h10a.5.5 0 010 1z" />
            </svg>
        </span>
    );
}

LiniPlaylist.propTypes = {
    size: PropTypes.number.isRequired,
};
