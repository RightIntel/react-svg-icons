import React from 'react';
import PropTypes from 'prop-types';

export default function LiniFolderUser({ size, ...props }) {
    let className = 'Component Lini LiniFolderUser';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.5 18h-17C.673 18 0 17.327 0 16.5V6c0-.352.119-.856.276-1.171l.553-1.106c.206-.413.71-.724 1.171-.724h7c.461 0 .964.311 1.171.724l.553 1.106A.406.406 0 0011 5h7.5c.827 0 1.5.673 1.5 1.5v10c0 .827-.673 1.5-1.5 1.5zM2 4a.404.404 0 00-.276.171l-.553 1.106A2.056 2.056 0 001 6.001v10.5a.5.5 0 00.5.5h17a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5H11c-.461 0-.965-.311-1.171-.724l-.553-1.106A.406.406 0 009 4H2z" />
                <path d="M13 14.467a4.906 4.906 0 00-.351-1.659c-.214-.514-.514-.927-.891-1.229a2.582 2.582 0 00-.303-.208 1.99 1.99 0 00.545-1.37c0-1.103-.897-2-2-2s-2 .897-2 2c0 .53.208 1.012.545 1.37a2.668 2.668 0 00-.303.208c-.377.302-.677.716-.891 1.229A4.884 4.884 0 007 14.5a.5.5 0 00.5.5h5.001a.5.5 0 00.5-.5L13 14.467zM9 10c0-.551.449-1 1-1s1 .449 1 1-.449 1-1 1c-.551 0-1-.449-1-1zm-.95 4a3.69 3.69 0 01.224-.808C8.608 12.39 9.173 12 10 12c1.429 0 1.837 1.268 1.953 2H8.049z" />
            </svg>
        </span>
    );
}

LiniFolderUser.propTypes = {
    size: PropTypes.number.isRequired,
};
