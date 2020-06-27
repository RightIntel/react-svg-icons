import React from 'react';
import PropTypes from 'prop-types';

export default function LiniQuestion({ size, ...props }) {
    let className = 'Component Lini LiniQuestion';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M9.5 17a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5c3.033 0 5.5-2.467 5.5-5.5S12.533 2 9.5 2 4 4.467 4 7.5a.5.5 0 01-1 0C3 3.916 5.916 1 9.5 1S16 3.916 16 7.5a6.509 6.509 0 01-6 6.481V16.5a.5.5 0 01-.5.5zM9.5 20a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5z" />
            </svg>
        </span>
    );
}

LiniQuestion.propTypes = {
    size: PropTypes.number.isRequired,
};
