import React from 'react';
import PropTypes from 'prop-types';

export default function LiniStream({ size, ...props }) {
    let className = 'Component Lini LiniStream';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M17.5 16h-2a.5.5 0 010-1h2a.5.5 0 00.5-.5v-12a.5.5 0 00-.5-.5h-16a.5.5 0 00-.5.5v12a.5.5 0 00.5.5h2a.5.5 0 010 1h-2C.673 16 0 15.327 0 14.5v-12C0 1.673.673 1 1.5 1h16c.827 0 1.5.673 1.5 1.5v12c0 .827-.673 1.5-1.5 1.5zM9.5 19c-.827 0-1.5-.673-1.5-1.5S8.673 16 9.5 16s1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1z" />
                <path d="M6.053 15.968a.5.5 0 01-.43-.755 4.503 4.503 0 017.752 0 .5.5 0 11-.861.509C11.886 14.66 10.731 14 9.498 14s-2.388.66-3.016 1.722a.5.5 0 01-.431.246z" />
                <path d="M15.107 13.808a.501.501 0 01-.401-.2C13.465 11.951 11.567 11 9.5 11s-3.965.95-5.206 2.608a.5.5 0 11-.8-.6 7.578 7.578 0 012.594-2.189c1.063-.544 2.211-.82 3.412-.82s2.35.276 3.412.82a7.556 7.556 0 012.594 2.189.5.5 0 01-.399.8z" />
            </svg>
        </span>
    );
}

LiniStream.propTypes = {
    size: PropTypes.number.isRequired,
};
