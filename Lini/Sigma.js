import React from 'react';
import PropTypes from 'prop-types';

export default function LiniSigma({ size, ...props }) {
    let className = 'Component Lini LiniSigma';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M14.5 18h-10a.498.498 0 01-.407-.79l4.792-6.709-4.792-6.709a.5.5 0 01.407-.79h10a.5.5 0 010 1H5.472l4.435 6.209a.5.5 0 010 .581l-4.435 6.209H14.5a.5.5 0 010 1z" />
            </svg>
        </span>
    );
}

LiniSigma.propTypes = {
    size: PropTypes.number.isRequired,
};
