import React from 'react';
import PropTypes from 'prop-types';

export default function LiniSocks({ size, ...props }) {
    let className = 'Component Lini LiniSocks';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M12.5 6a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v3a.5.5 0 01-.5.5zM14.5 6a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v3a.5.5 0 01-.5.5zM16.5 6a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v3a.5.5 0 01-.5.5z" />
                <path d="M17.5 0h-6c-.827 0-1.5.673-1.5 1.5v5c0 .356-.294.816-.617.966l-6.592 3.048-.013.006a5.016 5.016 0 00-2.006 1.81A4.984 4.984 0 000 15a5.006 5.006 0 007.22 4.481l9.695-4.664c1.169-.563 2.086-2.02 2.086-3.318v-10c0-.827-.673-1.5-1.5-1.5zM1 15c0-1.138.471-2.189 1.277-2.933a4.504 4.504 0 012.97 6.925A4.004 4.004 0 011 15zm5.783 3.581l-.006.003a3.629 3.629 0 01-.23.105 5.51 5.51 0 00-3.152-7.353l6.406-2.962c.672-.311 1.198-1.133 1.198-1.873v-5a.5.5 0 01.5-.5h6a.5.5 0 01.5.5v6.523a5.507 5.507 0 00-4.654 7.401l-6.563 3.157zm9.698-4.665l-2.229 1.072A4.506 4.506 0 0118 9.027v2.472c0 .914-.696 2.02-1.519 2.416z" />
            </svg>
        </span>
    );
}

LiniSocks.propTypes = {
    size: PropTypes.number.isRequired,
};
