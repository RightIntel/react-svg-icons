import React from 'react';
import PropTypes from 'prop-types';

export default function LiniRefund({ size, ...props }) {
    let className = 'Component Lini LiniRefund';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M10 20c-3.67 0-7.039-2.005-8.793-5.233a.5.5 0 11.879-.477A9.002 9.002 0 0010 19c4.963 0 9-4.037 9-9s-4.037-9-9-9a8.995 8.995 0 00-7.928 4.737.5.5 0 01-.928-.343l.869-4a.501.501 0 01.977.212l-.353 1.627A9.991 9.991 0 0110.002 0c2.671 0 5.182 1.04 7.071 2.929s2.929 4.4 2.929 7.071c0 2.671-1.04 5.182-2.929 7.071S12.673 20 10.002 20z" />
                <path d="M4.5 13a.5.5 0 01-.5-.5V8h-.5a.5.5 0 010-1h1a.5.5 0 01.5.5v5a.5.5 0 01-.5.5zM8.5 13h-2a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v5a.5.5 0 01-.5.5zM7 12h1V8H7v4zM12.5 13h-2a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v5a.5.5 0 01-.5.5zM11 12h1V8h-1v4zM14.5 13a.501.501 0 01-.465-.686l2-5a.501.501 0 01.929.371l-2 5a.5.5 0 01-.464.314zM14.5 8c-.132 0-.261-.053-.353-.147S14 7.631 14 7.5a.498.498 0 01.5-.5.5.5 0 010 1zM16.5 13a.498.498 0 01-.5-.5.498.498 0 01.5-.5.498.498 0 01.5.5.498.498 0 01-.5.5z" />
            </svg>
        </span>
    );
}

LiniRefund.propTypes = {
    size: PropTypes.number.isRequired,
};
