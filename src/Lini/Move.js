import React from 'react';
import PropTypes from 'prop-types';

export default function LiniMove({ size, ...props }) {
    let className = 'Component Lini LiniMove';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.354 10.146l-3-3a.5.5 0 00-.707.707l2.146 2.146H10V3.206l2.146 2.146a.498.498 0 00.708 0 .5.5 0 000-.707l-3-3a.5.5 0 00-.707 0l-3 3a.5.5 0 00.707.707L9 3.206v6.793H2.207l2.146-2.146a.5.5 0 00-.707-.707l-3 3a.5.5 0 000 .707l3 3a.498.498 0 00.708 0 .5.5 0 000-.707L2.208 11h6.793v6.793l-2.146-2.146a.5.5 0 00-.707.707l3 3a.498.498 0 00.708 0l3-3a.5.5 0 00-.707-.707l-2.146 2.146V11h6.793l-2.146 2.146a.5.5 0 00.708.707l3-3a.5.5 0 000-.707z" />
            </svg>
        </span>
    );
}

LiniMove.propTypes = {
    size: PropTypes.number.isRequired,
};