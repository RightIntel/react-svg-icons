import React from 'react';
import PropTypes from 'prop-types';

export default function LiniContract({ size, ...props }) {
    let className = 'Component Lini LiniContract';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M7.5 3a.5.5 0 00-.5.5v2.793L.854.147a.5.5 0 00-.707.707L6.293 7H3.5a.5.5 0 000 1h4a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5zM19.853.146a.5.5 0 00-.707 0L13 6.292V3.499a.5.5 0 00-1 0v4a.5.5 0 00.5.5h4a.5.5 0 000-1h-2.793L19.853.853a.5.5 0 000-.707zM7.5 12h-4a.5.5 0 000 1h2.793L.147 19.147a.5.5 0 10.708.706l6.146-6.146V16.5a.5.5 0 001 0v-4a.5.5 0 00-.5-.5zM19.853 19.147L13.707 13H16.5a.5.5 0 000-1h-4a.5.5 0 00-.5.5v4a.5.5 0 001 0v-2.793l6.147 6.147a.497.497 0 00.706-.001.5.5 0 000-.707z" />
            </svg>
        </span>
    );
}

LiniContract.propTypes = {
    size: PropTypes.number.isRequired,
};
