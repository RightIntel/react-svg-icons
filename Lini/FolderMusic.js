import React from 'react';
import PropTypes from 'prop-types';

export default function LiniFolderMusic({ size, ...props }) {
    let className = 'Component Lini LiniFolderMusic';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.5 18h-17C.673 18 0 17.327 0 16.5V6c0-.352.119-.856.276-1.171l.553-1.106c.206-.413.71-.724 1.171-.724h7c.461 0 .965.311 1.171.724l.553 1.106A.406.406 0 0011 5h7.5c.827 0 1.5.673 1.5 1.5v10c0 .827-.673 1.5-1.5 1.5zM2 4a.404.404 0 00-.276.171l-.553 1.106A2.056 2.056 0 001 6.001v10.5a.5.5 0 00.5.5h17a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5H11c-.461 0-.965-.311-1.171-.724l-.553-1.106A.406.406 0 009 4H2z" />
                <path d="M13.817 8.113a.501.501 0 00-.415-.104l-5 1a.5.5 0 00-.402.49v2.695a2.569 2.569 0 00-1-.195c-1.122 0-2 .659-2 1.5s.878 1.5 2 1.5 2-.659 2-1.5v-3.59l4-.8v2.085a2.569 2.569 0 00-1-.195c-1.122 0-2 .659-2 1.5s.878 1.5 2 1.5 2-.659 2-1.5v-4a.5.5 0 00-.183-.387zM7 14c-.61 0-1-.296-1-.5s.39-.5 1-.5 1 .296 1 .5-.39.5-1 .5zm5-1c-.61 0-1-.296-1-.5s.39-.5 1-.5 1 .296 1 .5-.39.5-1 .5z" />
            </svg>
        </span>
    );
}

LiniFolderMusic.propTypes = {
    size: PropTypes.number.isRequired,
};
