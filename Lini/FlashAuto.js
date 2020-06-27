import React from 'react';
import PropTypes from 'prop-types';

export default function LiniFlashAuto({ size, ...props }) {
    let className = 'Component Lini LiniFlashAuto';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M5.5 20a.5.5 0 01-.457-.703L8.286 12H3.5a.5.5 0 01-.354-.854l10-10a.501.501 0 01.811.556l-3.243 7.297H15.5a.5.5 0 01.354.854l-10 10a.499.499 0 01-.354.146zm-.793-9h4.348a.5.5 0 01.457.704L7.05 17.243l7.242-7.242H9.944a.5.5 0 01-.457-.704l2.462-5.539L4.707 11zM16.5 14a2.503 2.503 0 00-2.5 2.5v3a.5.5 0 001 0V18h3v1.5a.5.5 0 001 0v-3c0-1.378-1.122-2.5-2.5-2.5zM15 17v-.5c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5v.5h-3z" />
            </svg>
        </span>
    );
}

LiniFlashAuto.propTypes = {
    size: PropTypes.number.isRequired,
};
