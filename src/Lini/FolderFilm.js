import React from 'react';
import PropTypes from 'prop-types';

export default function LiniFolderFilm({ size, ...props }) {
    let className = 'Component Lini LiniFolderFilm';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.5 18h-17C.673 18 0 17.327 0 16.5V6c0-.352.119-.856.276-1.171l.553-1.106c.206-.413.71-.724 1.171-.724h7c.461 0 .964.311 1.171.724l.553 1.106A.406.406 0 0011 5h7.5c.827 0 1.5.673 1.5 1.5v10c0 .827-.673 1.5-1.5 1.5zM2 4a.404.404 0 00-.276.171l-.553 1.106A2.056 2.056 0 001 6.001v10.5a.5.5 0 00.5.5h17a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5H11c-.461 0-.965-.311-1.171-.724l-.553-1.106A.406.406 0 009 4H2z" />
                <path d="M15.5 8h-11a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5zM5 11h1v1H5v-1zm2-2h6v5H7V9zm7 2h1v1h-1v-1zm1-1h-1V9h1v1zM6 9v1H5V9h1zm-1 4h1v1H5v-1zm9 1v-1h1v1h-1z" />
            </svg>
        </span>
    );
}

LiniFolderFilm.propTypes = {
    size: PropTypes.number.isRequired,
};
