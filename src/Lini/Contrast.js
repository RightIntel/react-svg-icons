import React from 'react';
import PropTypes from 'prop-types';

export default function LiniContrast({ size, ...props }) {
    let className = 'Component Lini LiniContrast';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M9.5 20c-2.538 0-4.923-.988-6.718-2.782S0 13.038 0 10.501c0-2.538.988-4.923 2.782-6.718S6.962 1 9.5 1c2.538 0 4.923.988 6.718 2.783S19 7.963 19 10.501s-.988 4.923-2.782 6.717A9.438 9.438 0 019.5 20zm0-18C4.813 2 1 5.813 1 10.5S4.813 19 9.5 19s8.5-3.813 8.5-8.5S14.187 2 9.5 2z" />
                <path d="M9.5 17a.5.5 0 01-.5-.5v-12a.5.5 0 01.5-.5c3.584 0 6.5 2.916 6.5 6.5S13.084 17 9.5 17zM10 5.023v10.955c2.799-.253 5-2.613 5-5.477s-2.201-5.224-5-5.477z" />
            </svg>
        </span>
    );
}

LiniContrast.propTypes = {
    size: PropTypes.number.isRequired,
};