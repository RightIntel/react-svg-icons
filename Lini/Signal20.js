import React from 'react';
import PropTypes from 'prop-types';

export default function LiniSignal20({ size, ...props }) {
    let className = 'Component Lini LiniSignal20';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M2.5 19h-2a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v3a.5.5 0 01-.5.5zM1 18h1v-2H1v2zM18.5 19h-2a.5.5 0 010-1h2a.5.5 0 010 1zM14.5 19h-2a.5.5 0 010-1h2a.5.5 0 010 1zM10.5 19h-2a.5.5 0 010-1h2a.5.5 0 010 1zM6.5 19h-2a.5.5 0 010-1h2a.5.5 0 010 1z" />
            </svg>
        </span>
    );
}

LiniSignal20.propTypes = {
    size: PropTypes.number.isRequired,
};
