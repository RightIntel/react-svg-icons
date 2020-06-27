import React from 'react';
import PropTypes from 'prop-types';

export default function LiniArrowReturn({ size, ...props }) {
    let className = 'Component Lini LiniArrowReturn';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.5 5a.5.5 0 00-.5.5v4a.5.5 0 01-.5.5H2.207l4.146-4.146a.5.5 0 00-.707-.707l-5 5a.5.5 0 000 .707l5 5a.498.498 0 00.708 0 .5.5 0 000-.707l-4.146-4.146h15.293c.827 0 1.5-.673 1.5-1.5v-4a.5.5 0 00-.5-.5z" />
            </svg>
        </span>
    );
}

LiniArrowReturn.propTypes = {
    size: PropTypes.number.isRequired,
};
