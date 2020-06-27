import React from 'react';
import PropTypes from 'prop-types';

export default function LiniBarcode({ size, ...props }) {
    let className = 'Component Lini LiniBarcode';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M0 3h1v14H0V3zM16 3h.5v14H16V3zM3.5 3H4v14h-.5V3zM12 3h1v14h-1V3zM2 3h1v14H2V3zM7.5 3H8v14h-.5V3zM6 3h1v14H6V3zM19.5 3h.5v14h-.5V3zM17 3h1v14h-1V3zM8.5 3H9v14h-.5V3zM10 3h1v14h-1V3z" />
            </svg>
        </span>
    );
}

LiniBarcode.propTypes = {
    size: PropTypes.number.isRequired,
};
