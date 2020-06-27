import React from 'react';
import PropTypes from 'prop-types';

export default function LiniCreditCard({ size, ...props }) {
    let className = 'Component Lini LiniCreditCard';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.5 3h-17C.673 3 0 3.673 0 4.5v11c0 .827.673 1.5 1.5 1.5h17c.827 0 1.5-.673 1.5-1.5v-11c0-.827-.673-1.5-1.5-1.5zm-17 1h17a.5.5 0 01.5.5V5H1v-.5a.5.5 0 01.5-.5zM19 6v3H1V6h18zm-.5 10h-17a.5.5 0 01-.5-.5V10h18v5.5a.5.5 0 01-.5.5z" />
                <path d="M17 14h1v1h-1v-1zM13 14h3v1h-3v-1zM10 14h2v1h-2v-1z" />
            </svg>
        </span>
    );
}

LiniCreditCard.propTypes = {
    size: PropTypes.number.isRequired,
};
