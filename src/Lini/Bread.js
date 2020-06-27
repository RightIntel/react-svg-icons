import React from 'react';
import PropTypes from 'prop-types';

export default function LiniBread({ size, ...props }) {
    let className = 'Component Lini LiniBread';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M7 9.5a.5.5 0 11-1 0 .5.5 0 011 0zM9 9.5a.5.5 0 11-1 0 .5.5 0 011 0zM11 10.5a.5.5 0 11-1 0 .5.5 0 011 0zM10.991 6.511c0 .27-.222.489-.495.489s-.495-.219-.495-.489.222-.489.495-.489.495.219.495.489zM13 6.511c0 .27-.224.489-.5.489s-.5-.219-.5-.489.224-.489.5-.489.5.219.5.489zM4 13.5a.5.5 0 11-1 0 .5.5 0 011 0zM6 13.5a.5.5 0 11-1 0 .5.5 0 011 0zM5 15.5a.5.5 0 11-1 0 .5.5 0 011 0zM3 15.5a.5.5 0 11-1 0 .5.5 0 011 0zM16 4.5a.5.5 0 11-1 0 .5.5 0 011 0z" />
                <path d="M18.573 3.139C17.681 2.404 16.501 2 15.25 2c-.901 0-1.778.213-2.536.615-.66.351-1.204.83-1.589 1.397-1.036.066-2.002.403-2.754.967-.764.573-1.231 1.318-1.344 2.131-.911.166-1.75.518-2.436 1.031-1.026.768-1.592 1.803-1.592 2.914 0 .123.008.247.022.369-.489.178-.942.41-1.344.692C.595 12.873-.001 13.898-.001 15c0 1.175.451 2.173 1.305 2.884C2.18 18.614 3.458 19 4.999 19c1.599 0 3.113-.529 4.63-1.616 1.322-.948 2.486-2.181 3.719-3.487.482-.511.981-1.039 1.486-1.544.693-.693 1.34-1.31 1.911-1.854 2.029-1.933 3.254-3.101 3.254-4.5 0-1.087-.507-2.103-1.427-2.861zm-2.517 6.637c-.575.548-1.227 1.169-1.928 1.871a75.32 75.32 0 00-1.506 1.564C10.297 15.674 8.1 18 5 18c-2.505 0-4-1.122-4-3 0-.767.444-1.5 1.251-2.065C3.112 12.332 4.266 12 5.5 12c1.011 0 1.968.222 2.767.642a.499.499 0 10.465-.885C7.79 11.262 6.672 11 5.499 11c-.513 0-1.016.051-1.498.149a2.948 2.948 0 01-.002-.094c0-.788.423-1.539 1.191-2.113.647-.484 1.47-.795 2.366-.901l.009-.001A5.94 5.94 0 018.249 8c1.11 0 2.163.309 2.963.872a.5.5 0 00.575-.819C10.82 7.374 9.564 7 8.249 7c-.06 0-.12.001-.179.003.131-.455.439-.878.901-1.224C9.64 5.277 10.538 5 11.499 5c1.021 0 1.99.322 2.66.883a.5.5 0 00.642-.766c-.644-.54-1.495-.904-2.417-1.048C13.088 3.403 14.133 3 15.249 3c2.068 0 3.75 1.346 3.75 3 0 .971-1.171 2.087-2.944 3.776z" />
                <path d="M8 14.5a.5.5 0 11-1 0 .5.5 0 011 0z" />
            </svg>
        </span>
    );
}

LiniBread.propTypes = {
    size: PropTypes.number.isRequired,
};
