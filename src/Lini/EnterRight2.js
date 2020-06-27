import React from 'react';
import PropTypes from 'prop-types';

export default function LiniEnterRight2({ size, ...props }) {
    let className = 'Component Lini LiniEnterRight2';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M20 2.5v16c0 .827-.673 1.5-1.5 1.5h-1c-.827 0-1.5-.673-1.5-1.5v-5a.5.5 0 011 0v5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-16a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v5a.5.5 0 01-1 0v-5c0-.827.673-1.5 1.5-1.5h1c.827 0 1.5.673 1.5 1.5z" />
                <path d="M11.647 5.147a.5.5 0 000 .707L15.793 10H1.5a.5.5 0 000 1h14.293l-4.146 4.146a.5.5 0 00.707.707l5-5a.498.498 0 00-.001-.708l-5-5a.5.5 0 00-.707 0z" />
            </svg>
        </span>
    );
}

LiniEnterRight2.propTypes = {
    size: PropTypes.number.isRequired,
};
