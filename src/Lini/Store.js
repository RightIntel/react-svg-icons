import React from 'react';
import PropTypes from 'prop-types';

export default function LiniStore({ size, ...props }) {
    let className = 'Component Lini LiniStore';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18 9.5v-1a.499.499 0 00-.053-.224l-2-4A.5.5 0 0015.5 4h-12a.5.5 0 00-.447.276l-2 4A.496.496 0 001 8.5v1c0 .816.393 1.542 1 1.999V18h-.5a.5.5 0 000 1h16a.5.5 0 000-1H17v-6.501c.607-.457 1-1.182 1-1.999zM11.5 11c-.827 0-1.5-.673-1.5-1.5V9h3v.5c0 .827-.673 1.5-1.5 1.5zM2 9.5V9h3v.5c0 .827-.673 1.5-1.5 1.5S2 10.327 2 9.5zM9 5v3H6.14l.75-3H9zm3.11 0l.75 3H10V5h2.11zM6 9h3v.5c0 .827-.673 1.5-1.5 1.5S6 10.327 6 9.5V9zm8 0h3v.5c0 .827-.673 1.5-1.5 1.5S14 10.327 14 9.5V9zm2.691-1H13.89l-.75-3h2.051l1.5 3zM3.809 5H5.86l-.75 3H2.309l1.5-3zM3 11.95a2.501 2.501 0 002.5-.952 2.497 2.497 0 004 0c.361.48.89.827 1.5.951v6.05H3v-6.05zM16 18h-4v-6.05a2.504 2.504 0 001.5-.951 2.497 2.497 0 002.5.952v6.05z" />
                <path d="M14 14.5a.5.5 0 11-1 0 .5.5 0 011 0zM4.5 15a.5.5 0 01-.354-.853l1-1a.5.5 0 01.707.707l-1 1a.498.498 0 01-.354.146zM5.5 17a.5.5 0 01-.354-.853l3-3a.5.5 0 01.707.707l-3 3a.498.498 0 01-.354.146zM8.5 17a.5.5 0 01-.354-.853l1-1a.5.5 0 01.707.707l-1 1a.498.498 0 01-.354.146z" />
            </svg>
        </span>
    );
}

LiniStore.propTypes = {
    size: PropTypes.number.isRequired,
};
