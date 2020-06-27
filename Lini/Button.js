import React from 'react';
import PropTypes from 'prop-types';

export default function LiniButton({ size, ...props }) {
    let className = 'Component Lini LiniButton';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M7.5 10C6.673 10 6 9.327 6 8.5S6.673 7 7.5 7 9 7.673 9 8.5 8.327 10 7.5 10zm0-2a.5.5 0 100 1 .5.5 0 000-1zM11.5 10c-.827 0-1.5-.673-1.5-1.5S10.673 7 11.5 7s1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1zM7.5 14c-.827 0-1.5-.673-1.5-1.5S6.673 11 7.5 11s1.5.673 1.5 1.5S8.327 14 7.5 14zm0-2a.5.5 0 100 1 .5.5 0 000-1zM11.5 14c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1z" />
                <path d="M9.5 20c-2.538 0-4.923-.988-6.718-2.782S0 13.038 0 10.501c0-2.538.988-4.923 2.782-6.718S6.962 1 9.5 1c2.538 0 4.923.988 6.718 2.783S19 7.963 19 10.501s-.988 4.923-2.782 6.717A9.438 9.438 0 019.5 20zm0-18C4.813 2 1 5.813 1 10.5S4.813 19 9.5 19s8.5-3.813 8.5-8.5S14.187 2 9.5 2z" />
                <path d="M9.5 17C5.916 17 3 14.084 3 10.5S5.916 4 9.5 4 16 6.916 16 10.5 13.084 17 9.5 17zm0-12C6.467 5 4 7.467 4 10.5S6.467 16 9.5 16s5.5-2.467 5.5-5.5S12.533 5 9.5 5z" />
            </svg>
        </span>
    );
}

LiniButton.propTypes = {
    size: PropTypes.number.isRequired,
};
