import React from 'react';
import PropTypes from 'prop-types';

export default function LiniTab({ size, ...props }) {
    let className = 'Component Lini LiniTab';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.354 7.146l-3-3a.5.5 0 00-.707.707l2.146 2.146H2.5a.5.5 0 000 1h14.293l-2.146 2.146a.5.5 0 00.708.707l3-3a.5.5 0 000-.707zM17.5 13H3.207l2.146-2.146a.5.5 0 00-.707-.707l-3 3a.5.5 0 000 .707l3 3a.498.498 0 00.708 0 .5.5 0 000-.707l-2.146-2.146h14.293a.5.5 0 000-1z" />
            </svg>
        </span>
    );
}

LiniTab.propTypes = {
    size: PropTypes.number.isRequired,
};
