import React from 'react';
import PropTypes from 'prop-types';

export default function Lini__Name__({ size, ...props }) {
    let className = 'Component Lini Lini__Name__';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                __paths__
            </svg>
        </span>
    );
}

Lini__Name__.propTypes = {
    size: PropTypes.number.isRequired,
};
