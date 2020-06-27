import React from 'react';
import PropTypes from 'prop-types';

export default function LiniEngine({ size, ...props }) {
    let className = 'Component Lini LiniEngine';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.5 6h-1a.5.5 0 00-.5.5V8h-1V6.5a.5.5 0 00-.5-.5H14v-.5a.5.5 0 00-.5-.5H10V4h2.5a.5.5 0 000-1h-6a.5.5 0 000 1H9v1H5.5a.5.5 0 00-.5.5V6H2.5a.5.5 0 00-.5.5V10H1V7.5a.5.5 0 00-1 0v6a.5.5 0 001 0V11h1v3.5a.5.5 0 00.5.5h2.793l1.854 1.854a.5.5 0 00.354.146h8a.5.5 0 00.5-.5V14h1v1.5a.5.5 0 00.5.5h1c.827 0 1.5-.673 1.5-1.5v-7c0-.827-.673-1.5-1.5-1.5zm.5 8.5a.5.5 0 01-.5.5H18v-1.5a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5V16H7.707l-1.854-1.854A.5.5 0 005.499 14h-2.5V7h2.5a.5.5 0 00.5-.5V6h7v.5a.5.5 0 00.5.5h1.5v1.5a.5.5 0 00.5.5h2a.5.5 0 00.5-.5V7h.5a.5.5 0 01.5.5v7z" />
            </svg>
        </span>
    );
}

LiniEngine.propTypes = {
    size: PropTypes.number.isRequired,
};
