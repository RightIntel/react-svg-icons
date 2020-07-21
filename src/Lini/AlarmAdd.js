import React from 'react';
import PropTypes from 'prop-types';

export default function LiniAlarmAdd({ size, ...props }) {
    let className = 'Component Lini LiniAlarmAdd';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M16.8 15.101A4.466 4.466 0 0115 11.5v-3a5.51 5.51 0 00-4-5.292V2.5c0-.827-.673-1.5-1.5-1.5S8 1.673 8 2.5v.708A5.51 5.51 0 004 8.5v3a4.468 4.468 0 01-1.8 3.601.5.5 0 00.3.9h4.55a2.503 2.503 0 002.449 3 2.503 2.503 0 002.45-3h4.55a.5.5 0 00.3-.9zM9 2.5a.5.5 0 011 0v.523a5.508 5.508 0 00-1 0V2.5zm2 14c0 .827-.673 1.5-1.5 1.5a1.502 1.502 0 01-1.414-2h2.828c.056.16.086.329.086.5zM3.742 15c.255-.309.477-.646.659-1.001A5.435 5.435 0 005 11.5v-3C5 6.019 7.019 4 9.5 4S14 6.019 14 8.5v3a5.448 5.448 0 001.258 3.5H3.741z" />
                <path d="M11.5 9H10V7.5a.5.5 0 00-1 0V9H7.5a.5.5 0 000 1H9v1.5a.5.5 0 001 0V10h1.5a.5.5 0 000-1z" />
            </svg>
        </span>
    );
}

LiniAlarmAdd.propTypes = {
    size: PropTypes.number.isRequired,
};