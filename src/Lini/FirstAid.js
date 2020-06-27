import React from 'react';
import PropTypes from 'prop-types';

export default function LiniFirstAid({ size, ...props }) {
    let className = 'Component Lini LiniFirstAid';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M11.5 16h-3a.5.5 0 01-.5-.5V14H6.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H8V8.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V10h1.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H12v1.5a.5.5 0 01-.5.5zM9 15h2v-1.5a.5.5 0 01.5-.5H13v-2h-1.5a.5.5 0 01-.5-.5V9H9v1.5a.5.5 0 01-.5.5H7v2h1.5a.5.5 0 01.5.5V15z" />
                <path d="M18.5 5H14V3.5c0-.827-.673-1.5-1.5-1.5h-5C6.673 2 6 2.673 6 3.5V5H1.5C.673 5 0 5.673 0 6.5v11c0 .827.673 1.5 1.5 1.5h17c.827 0 1.5-.673 1.5-1.5v-11c0-.827-.673-1.5-1.5-1.5zM7 3.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5V5H7V3.5zm12 14a.5.5 0 01-.5.5h-17a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h17a.5.5 0 01.5.5v11z" />
            </svg>
        </span>
    );
}

LiniFirstAid.propTypes = {
    size: PropTypes.number.isRequired,
};
