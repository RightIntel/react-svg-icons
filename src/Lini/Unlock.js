import React from 'react';
import PropTypes from 'prop-types';

export default function LiniUnlock({ size, ...props }) {
    let className = 'Component Lini LiniUnlock';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M13.5 1A4.505 4.505 0 009 5.5V8H1.5C.673 8 0 8.673 0 9.5v8c0 .827.673 1.5 1.5 1.5h10c.827 0 1.5-.673 1.5-1.5v-8c0-.827-.673-1.5-1.5-1.5H10V5.5C10 3.57 11.57 2 13.5 2S17 3.57 17 5.5v1a.5.5 0 001 0v-1C18 3.019 15.981 1 13.5 1zm-2 8a.5.5 0 01.5.5v8a.5.5 0 01-.5.5h-10a.5.5 0 01-.5-.5v-8a.5.5 0 01.5-.5h10z" />
            </svg>
        </span>
    );
}

LiniUnlock.propTypes = {
    size: PropTypes.number.isRequired,
};
