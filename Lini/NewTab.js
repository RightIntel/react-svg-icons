import React from 'react';
import PropTypes from 'prop-types';

export default function LiniNewTab({ size, ...props }) {
    let className = 'Component Lini LiniNewTab';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M3 3.5a.5.5 0 11-1 0 .5.5 0 011 0zM5 3.5a.5.5 0 11-1 0 .5.5 0 011 0zM7 3.5a.5.5 0 11-1 0 .5.5 0 011 0z" />
                <path d="M18.5 1h-17C.673 1 0 1.673 0 2.5v12a.5.5 0 001 0V6h7.5c.827 0 1.5-.673 1.5-1.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5c0 .827.673 1.5 1.5 1.5H19v11.5a.5.5 0 01-.5.5h-14a.5.5 0 000 1h14c.827 0 1.5-.673 1.5-1.5v-15c0-.827-.673-1.5-1.5-1.5zm-1 4a.5.5 0 01-.5-.5c0-.827-.673-1.5-1.5-1.5h-5C9.673 3 9 3.673 9 4.5a.5.5 0 01-.5.5H1V2.5a.5.5 0 01.5-.5h17a.5.5 0 01.5.5V5h-1.5z" />
                <path d="M7.5 11h-3a.5.5 0 000 1h1.793l-5.146 5.146a.5.5 0 00.708.707l5.146-5.146V14.5a.5.5 0 001 0v-3a.5.5 0 00-.5-.5z" />
            </svg>
        </span>
    );
}

LiniNewTab.propTypes = {
    size: PropTypes.number.isRequired,
};
