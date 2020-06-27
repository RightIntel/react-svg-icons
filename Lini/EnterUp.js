import React from 'react';
import PropTypes from 'prop-types';

export default function LiniEnterUp({ size, ...props }) {
    let className = 'Component Lini LiniEnterUp';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M12.854 9.354a.5.5 0 01-.707 0l-2.146-2.146v12.293a.5.5 0 01-1 0V7.208L6.855 9.354a.5.5 0 01-.707-.707l3-3a.498.498 0 01.708 0l3 3a.5.5 0 010 .707z" />
                <path d="M15.5 1h-12C2.673 1 2 1.673 2 2.5v10c0 .827.673 1.5 1.5 1.5h4a.5.5 0 000-1h-4a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5h12a.5.5 0 01.5.5v10a.5.5 0 01-.5.5h-4a.5.5 0 000 1h4c.827 0 1.5-.673 1.5-1.5v-10c0-.827-.673-1.5-1.5-1.5z" />
            </svg>
        </span>
    );
}

LiniEnterUp.propTypes = {
    size: PropTypes.number.isRequired,
};
