import React from 'react';
import PropTypes from 'prop-types';

export default function LiniBaby3({ size, ...props }) {
    let className = 'Component Lini LiniBaby3';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M7.5 8C6.673 8 6 7.327 6 6.5a.5.5 0 011 0 .5.5 0 001 0 .5.5 0 011 0C9 7.327 8.327 8 7.5 8zM11.5 8c-.827 0-1.5-.673-1.5-1.5a.5.5 0 011 0 .5.5 0 001 0 .5.5 0 011 0c0 .827-.673 1.5-1.5 1.5z" />
                <path d="M9.5 14C6.467 14 4 11.533 4 8.5S6.467 3 9.5 3 15 5.467 15 8.5 12.533 14 9.5 14zm0-10C7.019 4 5 6.019 5 8.5S7.019 13 9.5 13 14 10.981 14 8.5 11.981 4 9.5 4z" />
                <path d="M9.5 12a3.505 3.505 0 01-2.609-1.167.5.5 0 11.745-.667 2.502 2.502 0 003.727 0 .5.5 0 11.745.667 3.506 3.506 0 01-2.609 1.166z" />
                <path d="M15.51 2.49C13.905.885 11.77 0 9.5 0S5.095.884 3.49 2.49 1 6.23 1 8.5v11a.5.5 0 00.649.477L17 15.18v4.32a.5.5 0 001 0v-4.988V8.5c0-2.27-.884-4.405-2.49-6.01zM2 15.157l6.228 1.717L2 18.82v-3.663zm15-1.025l-7.009 2.19L2 14.119V8.5C2 4.364 5.364 1 9.5 1S17 4.364 17 8.5v5.632z" />
            </svg>
        </span>
    );
}

LiniBaby3.propTypes = {
    size: PropTypes.number.isRequired,
};
