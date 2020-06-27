import React from 'react';
import PropTypes from 'prop-types';

export default function LiniMapMarker({ size, ...props }) {
    let className = 'Component Lini LiniMapMarker';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M10 20a.5.5 0 01-.393-.191c-.057-.073-1.418-1.814-2.797-4.385-.812-1.513-1.46-2.999-1.925-4.416C4.298 9.221 4.001 7.536 4.001 6c0-3.308 2.692-6 6-6s6 2.692 6 6c0 1.536-.298 3.22-.884 5.008-.465 1.417-1.113 2.903-1.925 4.416-1.38 2.571-2.74 4.312-2.797 4.385a.5.5 0 01-.393.191zm0-19C7.243 1 5 3.243 5 6c0 3.254 1.463 6.664 2.691 8.951A34.411 34.411 0 0010 18.661a34.38 34.38 0 002.318-3.726C13.541 12.652 15 9.248 15 6c0-2.757-2.243-5-5-5z" />
                <path d="M10 9C8.346 9 7 7.654 7 6s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
            </svg>
        </span>
    );
}

LiniMapMarker.propTypes = {
    size: PropTypes.number.isRequired,
};
