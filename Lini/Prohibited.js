import React from 'react';
import PropTypes from 'prop-types';

export default function LiniProhibited({ size, ...props }) {
    let className = 'Component Lini LiniProhibited';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M17.071 2.929C15.182 1.04 12.671 0 10 0S4.818 1.04 2.929 2.929 0 7.329 0 10c0 2.671 1.04 5.182 2.929 7.071S7.329 20 10 20c2.671 0 5.182-1.04 7.071-2.929S20 12.671 20 10a9.934 9.934 0 00-2.929-7.071zM10 1a8.973 8.973 0 016.46 2.74L2.885 15.505A8.954 8.954 0 011 10c0-4.963 4.037-9 9-9zm0 18a8.973 8.973 0 01-6.46-2.74L17.115 4.495A8.954 8.954 0 0119 10c0 4.963-4.037 9-9 9z" />
            </svg>
        </span>
    );
}

LiniProhibited.propTypes = {
    size: PropTypes.number.isRequired,
};
