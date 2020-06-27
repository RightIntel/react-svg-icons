import React from 'react';
import PropTypes from 'prop-types';

export default function LiniList3({ size, ...props }) {
    let className = 'Component Lini LiniList3';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M2 6a.502.502 0 01-.354-.146l-1.5-1.5a.5.5 0 01.707-.707l1.146 1.146L6.145.647a.5.5 0 01.707.707l-4.5 4.5A.498.498 0 011.998 6zM19.5 5h-12a.5.5 0 010-1h12a.5.5 0 010 1zM2 13a.502.502 0 01-.354-.146l-1.5-1.5a.5.5 0 01.707-.707l1.146 1.146 4.146-4.146a.5.5 0 01.707.707l-4.5 4.5a.498.498 0 01-.354.146zM19.5 12h-12a.5.5 0 010-1h12a.5.5 0 010 1zM2 20a.502.502 0 01-.354-.146l-1.5-1.5a.5.5 0 01.707-.707l1.146 1.146 4.146-4.146a.5.5 0 01.707.707l-4.5 4.5a.498.498 0 01-.354.146zM19.5 19h-12a.5.5 0 010-1h12a.5.5 0 010 1z" />
            </svg>
        </span>
    );
}

LiniList3.propTypes = {
    size: PropTypes.number.isRequired,
};
