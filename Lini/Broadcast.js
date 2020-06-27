import React from 'react';
import PropTypes from 'prop-types';

export default function LiniBroadcast({ size, ...props }) {
    let className = 'Component Lini LiniBroadcast';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M9.5 12c-.827 0-1.5-.673-1.5-1.5S8.673 9 9.5 9s1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1zM12.328 13.828a.5.5 0 01-.354-.853c.661-.661 1.025-1.54 1.025-2.475s-.364-1.814-1.025-2.475a.5.5 0 01.707-.707c.85.85 1.318 1.98 1.318 3.182s-.468 2.332-1.318 3.182a.498.498 0 01-.354.146z" />
                <path d="M14.45 15.95a.5.5 0 01-.354-.853C15.324 13.869 16 12.237 16 10.501s-.676-3.369-1.904-4.596a.5.5 0 01.707-.707C16.22 6.615 17 8.498 17 10.501s-.78 3.887-2.197 5.303a.498.498 0 01-.354.146zM6.672 13.828a.502.502 0 01-.354-.146C5.468 12.832 5 11.702 5 10.5s.468-2.332 1.318-3.182a.5.5 0 01.707.707C6.364 8.686 6 9.565 6 10.5s.364 1.814 1.025 2.475a.5.5 0 01-.354.853z" />
                <path d="M4.55 15.95a.502.502 0 01-.354-.146c-1.417-1.417-2.197-3.3-2.197-5.303s.78-3.887 2.197-5.303a.5.5 0 01.707.707c-1.228 1.228-1.904 2.86-1.904 4.596s.676 3.368 1.904 4.596a.5.5 0 01-.354.853z" />
            </svg>
        </span>
    );
}

LiniBroadcast.propTypes = {
    size: PropTypes.number.isRequired,
};
