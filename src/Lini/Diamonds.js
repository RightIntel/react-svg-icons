import React from 'react';
import PropTypes from 'prop-types';

export default function LiniDiamonds({ size, ...props }) {
    let className = 'Component Lini LiniDiamonds';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M9.5 20a.5.5 0 01-.395-.193l-7-9a.501.501 0 010-.614l7-9a.5.5 0 01.79 0l7 9c.14.181.14.433 0 .614l-7 9A.5.5 0 019.5 20zm-6.367-9.5L9.5 18.686l6.367-8.186L9.5 2.314 3.133 10.5z" />
            </svg>
        </span>
    );
}

LiniDiamonds.propTypes = {
    size: PropTypes.number.isRequired,
};
