import React from 'react';
import PropTypes from 'prop-types';

export default function LiniTextAlignCenter({ size, ...props }) {
    let className = 'Component Lini LiniTextAlignCenter';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M17.5 5h-15a.5.5 0 010-1h15a.5.5 0 010 1zM15.5 8h-11a.5.5 0 010-1h11a.5.5 0 010 1zM17.5 11h-15a.5.5 0 010-1h15a.5.5 0 010 1zM15.5 14h-11a.5.5 0 010-1h11a.5.5 0 010 1zM17.5 17h-15a.5.5 0 010-1h15a.5.5 0 010 1z" />
            </svg>
        </span>
    );
}

LiniTextAlignCenter.propTypes = {
    size: PropTypes.number.isRequired,
};
