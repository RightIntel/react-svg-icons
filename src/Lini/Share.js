import React from 'react';
import PropTypes from 'prop-types';

export default function LiniShare({ size, ...props }) {
    let className = 'Component Lini LiniShare';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.5 18h-17C.673 18 0 17.327 0 16.5v-13C0 2.673.673 2 1.5 2h11a.5.5 0 010 1h-11a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h17a.5.5 0 00.5-.5v-7a.5.5 0 011 0v7c0 .827-.673 1.5-1.5 1.5z" />
                <path d="M19.354 6.146l-4-4a.5.5 0 00-.707.707l3.146 3.146H11.5c-1.721 0-3.346.62-4.575 1.747C5.684 8.884 5 10.394 5 11.999v.5a.5.5 0 001 0v-.5c0-2.757 2.467-5 5.5-5h6.293l-3.146 3.146a.5.5 0 00.708.707l4-4a.5.5 0 000-.707z" />
            </svg>
        </span>
    );
}

LiniShare.propTypes = {
    size: PropTypes.number.isRequired,
};
