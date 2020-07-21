import React from 'react';
import PropTypes from 'prop-types';

export default function LiniTimer2({ size, ...props }) {
    let className = 'Component Lini LiniTimer2';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M15.51 5.49A8.438 8.438 0 0010 3.015V2h.5a.5.5 0 000-1h-2a.5.5 0 000 1H9v1.015A8.438 8.438 0 003.49 5.49C1.885 7.095 1 9.23 1 11.5s.884 4.405 2.49 6.01C5.095 19.115 7.23 20 9.5 20s4.405-.884 6.01-2.49C17.115 15.905 18 13.77 18 11.5s-.884-4.405-2.49-6.01zM9.5 19C5.364 19 2 15.636 2 11.5S5.364 4 9.5 4 17 7.364 17 11.5 13.636 19 9.5 19z" />
                <path d="M9.5 12a.5.5 0 01-.5-.5v-6a.5.5 0 011 0v6a.5.5 0 01-.5.5z" />
            </svg>
        </span>
    );
}

LiniTimer2.propTypes = {
    size: PropTypes.number.isRequired,
};