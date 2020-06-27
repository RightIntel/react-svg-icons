import React from 'react';
import PropTypes from 'prop-types';

export default function LiniAlignTop({ size, ...props }) {
    let className = 'Component Lini LiniAlignTop';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M0 .5A.5.5 0 01.5 0h19a.5.5 0 010 1H.5A.5.5 0 010 .5zM11 11.5v-8c0-.827.673-1.5 1.5-1.5h4c.827 0 1.5.673 1.5 1.5v8c0 .827-.673 1.5-1.5 1.5h-4c-.827 0-1.5-.673-1.5-1.5zm6-8a.5.5 0 00-.5-.5h-4a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h4a.5.5 0 00.5-.5v-8zM2 17.5v-14C2 2.673 2.673 2 3.5 2h4C8.327 2 9 2.673 9 3.5v14c0 .827-.673 1.5-1.5 1.5h-4c-.827 0-1.5-.673-1.5-1.5zm6-14a.5.5 0 00-.5-.5h-4a.5.5 0 00-.5.5v14a.5.5 0 00.5.5h4a.5.5 0 00.5-.5v-14z" />
            </svg>
        </span>
    );
}

LiniAlignTop.propTypes = {
    size: PropTypes.number.isRequired,
};