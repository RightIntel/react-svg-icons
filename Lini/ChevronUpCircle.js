import React from 'react';
import PropTypes from 'prop-types';

export default function LiniChevronUpCircle({ size, ...props }) {
    let className = 'Component Lini LiniChevronUpCircle';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M2.782 3.782C.988 5.576 0 7.962 0 10.5s.988 4.923 2.782 6.718S6.962 20 9.5 20s4.923-.988 6.718-2.782S19 13.038 19 10.501s-.988-4.923-2.782-6.718-4.18-2.782-6.718-2.782-4.923.988-6.718 2.782zM18 10.5c0 4.687-3.813 8.5-8.5 8.5S1 15.187 1 10.5C1 5.813 4.813 2 9.5 2S18 5.813 18 10.5z" />
                <path d="M15 12a.5.5 0 01-.853.354L9.501 7.708l-4.646 4.646a.5.5 0 01-.707-.707l5-5a.5.5 0 01.707 0l5 5a.498.498 0 01.146.354z" />
            </svg>
        </span>
    );
}

LiniChevronUpCircle.propTypes = {
    size: PropTypes.number.isRequired,
};
