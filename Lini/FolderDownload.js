import React from 'react';
import PropTypes from 'prop-types';

export default function LiniFolderDownload({ size, ...props }) {
    let className = 'Component Lini LiniFolderDownload';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.5 18h-17C.673 18 0 17.327 0 16.5V6c0-.352.119-.856.276-1.171l.553-1.106c.206-.413.71-.724 1.171-.724h7c.461 0 .964.311 1.171.724l.553 1.106A.406.406 0 0011 5h7.5c.827 0 1.5.673 1.5 1.5v10c0 .827-.673 1.5-1.5 1.5zM2 4a.404.404 0 00-.276.171l-.553 1.106A2.056 2.056 0 001 6.001v10.5a.5.5 0 00.5.5h17a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5H11c-.461 0-.965-.311-1.171-.724l-.553-1.106A.406.406 0 009 4H2z" />
                <path d="M12.854 11.646a.5.5 0 00-.707 0l-2.146 2.146V8.499a.5.5 0 00-1 0v5.293l-2.146-2.146a.5.5 0 00-.707.707l3 3a.498.498 0 00.708 0l3-3a.5.5 0 000-.707z" />
            </svg>
        </span>
    );
}

LiniFolderDownload.propTypes = {
    size: PropTypes.number.isRequired,
};
