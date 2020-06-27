import React from 'react';
import PropTypes from 'prop-types';

export default function LiniTongue({ size, ...props }) {
    let className = 'Component Lini LiniTongue';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M9.5 20c-2.538 0-4.923-.988-6.718-2.782S0 13.038 0 10.501c0-2.538.988-4.923 2.782-6.718S6.962 1 9.5 1c2.538 0 4.923.988 6.718 2.783S19 7.963 19 10.501s-.988 4.923-2.782 6.717A9.438 9.438 0 019.5 20zm0-18C4.813 2 1 5.813 1 10.5S4.813 19 9.5 19s8.5-3.813 8.5-8.5S14.187 2 9.5 2z" />
                <path d="M6.5 8C5.673 8 5 7.327 5 6.5S5.673 5 6.5 5 8 5.673 8 6.5 7.327 8 6.5 8zm0-2a.5.5 0 100 1 .5.5 0 000-1zM12.5 8c-.827 0-1.5-.673-1.5-1.5S11.673 5 12.5 5s1.5.673 1.5 1.5S13.327 8 12.5 8zm0-2a.5.5 0 100 1 .5.5 0 000-1zM13.5 12h-8a.5.5 0 000 1H9v1c0 1.103.897 2 2 2s2-.897 2-2v-1h.5a.5.5 0 000-1zM12 14c0 .551-.449 1-1 1s-1-.449-1-1v-1h2v1z" />
            </svg>
        </span>
    );
}

LiniTongue.propTypes = {
    size: PropTypes.number.isRequired,
};