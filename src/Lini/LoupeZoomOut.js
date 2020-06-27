import React from 'react';
import PropTypes from 'prop-types';

export default function LiniLoupeZoomOut({ size, ...props }) {
    let className = 'Component Lini LiniLoupeZoomOut';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M17.5 20h-8c-2.538 0-4.923-.988-6.718-2.782S0 13.038 0 10.501c0-2.538.988-4.923 2.782-6.718S6.962 1 9.5 1c2.538 0 4.923.988 6.718 2.783S19 7.963 19 10.501v8c0 .827-.673 1.5-1.5 1.5zm-8-18C4.813 2 1 5.813 1 10.5S4.813 19 9.5 19h8a.5.5 0 00.5-.5v-8C18 5.813 14.187 2 9.5 2z" />
                <path d="M9.5 17C5.916 17 3 14.084 3 10.5S5.916 4 9.5 4 16 6.916 16 10.5 13.084 17 9.5 17zm0-12C6.467 5 4 7.467 4 10.5S6.467 16 9.5 16s5.5-2.467 5.5-5.5S12.533 5 9.5 5z" />
                <path d="M12.5 11h-6a.5.5 0 010-1h6a.5.5 0 010 1z" />
            </svg>
        </span>
    );
}

LiniLoupeZoomOut.propTypes = {
    size: PropTypes.number.isRequired,
};
