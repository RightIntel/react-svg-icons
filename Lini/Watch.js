import React from 'react';
import PropTypes from 'prop-types';

export default function LiniWatch({ size, ...props }) {
    let className = 'Component Lini LiniWatch';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M15.5 9h-.675a6.5 6.5 0 00-1.87-3.228l-.752-3.403C12.034 1.602 11.285 1 10.499 1h-4c-.786 0-1.534.601-1.704 1.369l-.752 3.403C2.785 6.958 1.998 8.639 1.998 10.5s.787 3.542 2.045 4.728l.752 3.403c.169.767.918 1.369 1.704 1.369h4c.786 0 1.534-.601 1.704-1.369l.752-3.403A6.507 6.507 0 0014.825 12h.675c.827 0 1.5-.673 1.5-1.5S16.327 9 15.5 9zM5.773 2.584C5.841 2.278 6.187 2 6.5 2h4c.313 0 .66.278.727.584l.503 2.277C10.778 4.313 9.675 4 8.5 4s-2.278.313-3.23.861l.503-2.277zm5.454 15.832c-.068.306-.414.584-.727.584h-4c-.313 0-.66-.278-.727-.584l-.503-2.277c.952.548 2.055.861 3.23.861s2.278-.313 3.23-.861l-.503 2.277zM8.5 16C5.467 16 3 13.533 3 10.5S5.467 5 8.5 5 14 7.467 14 10.5 11.533 16 8.5 16zm7-5h-.519a6.37 6.37 0 000-1h.519a.5.5 0 010 1z" />
                <path d="M8.5 11a.495.495 0 01-.224-.053l-2-1a.5.5 0 01.447-.895l1.74.87 2.759-1.839a.5.5 0 11.554.832l-3 2a.498.498 0 01-.277.084z" />
            </svg>
        </span>
    );
}

LiniWatch.propTypes = {
    size: PropTypes.number.isRequired,
};
