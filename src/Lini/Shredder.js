import React from 'react';
import PropTypes from 'prop-types';

export default function LiniShredder({ size, ...props }) {
    let className = 'Component Lini LiniShredder';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M15.5 11c-.827 0-1.5-.673-1.5-1.5S14.673 8 15.5 8s1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1zM13.5 5h-8a.5.5 0 010-1h8a.5.5 0 010 1z" />
                <path d="M17.5 6H16V1.5c0-.827-.673-1.5-1.5-1.5h-10C3.673 0 3 .673 3 1.5V6H1.5C.673 6 0 6.673 0 7.5v9c0 .827.673 1.5 1.5 1.5H3v1.5a.5.5 0 001 0V14h1v4.5a.5.5 0 001 0V14h1v5.5a.5.5 0 001 0V14h1v4.5a.5.5 0 001 0V14h1v5.5a.5.5 0 001 0V14h1v4.5a.5.5 0 001 0V14h1v5.5a.5.5 0 001 0V18h1.5c.827 0 1.5-.673 1.5-1.5v-9c0-.827-.673-1.5-1.5-1.5zM4 1.5a.5.5 0 01.5-.5h10a.5.5 0 01.5.5V6H4V1.5zm14 15a.5.5 0 01-.5.5H16v-3h.5a.5.5 0 000-1h-14a.5.5 0 000 1H3v3H1.5a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h16a.5.5 0 01.5.5v9z" />
                <path d="M13.5 3h-8a.5.5 0 010-1h8a.5.5 0 010 1z" />
            </svg>
        </span>
    );
}

LiniShredder.propTypes = {
    size: PropTypes.number.isRequired,
};
