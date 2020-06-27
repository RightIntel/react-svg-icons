import React from 'react';
import PropTypes from 'prop-types';

export default function LiniLoading2({ size, ...props }) {
    let className = 'Component Lini LiniLoading2';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M17.071 2.929C15.182 1.04 12.671 0 10 0S4.818 1.04 2.929 2.929 0 7.329 0 10c0 2.671 1.04 5.182 2.929 7.071S7.329 20 10 20c2.671 0 5.182-1.04 7.071-2.929S20 12.671 20 10a9.934 9.934 0 00-2.929-7.071zM10 1c4.963 0 9 4.037 9 9 0 .551-.449 1-1 1s-1-.449-1-1c0-2.137-.832-4.146-2.343-5.657S11.137 2 9 2c-1.955 0-3.977.697-5.637 1.928A8.98 8.98 0 0110 1zm0 18c-4.963 0-9-4.037-9-9 0-3.942 4.3-7 8-7 3.86 0 7 3.14 7 7a2.002 2.002 0 002.814 1.826C17.968 15.916 14.337 19 10 19z" />
            </svg>
        </span>
    );
}

LiniLoading2.propTypes = {
    size: PropTypes.number.isRequired,
};
