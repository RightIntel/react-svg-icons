import React from 'react';
import PropTypes from 'prop-types';

export default function LiniExpand3({ size, ...props }) {
    let className = 'Component Lini LiniExpand3';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M17.5 18h-16C.673 18 0 17.327 0 16.5v-12C0 3.673.673 3 1.5 3h16c.827 0 1.5.673 1.5 1.5v12c0 .827-.673 1.5-1.5 1.5zM1.5 4a.5.5 0 00-.5.5v12a.5.5 0 00.5.5h16a.5.5 0 00.5-.5v-12a.5.5 0 00-.5-.5h-16z" />
                <path d="M11.854 6.646l-2-2a.5.5 0 00-.707 0l-2 2a.5.5 0 00.707.707L9 6.207V8.5a.5.5 0 001 0V6.207l1.146 1.146a.498.498 0 00.708 0 .5.5 0 000-.707zM11.854 13.646a.5.5 0 00-.707 0l-1.146 1.146v-2.293a.5.5 0 00-1 0v2.293l-1.146-1.146a.5.5 0 00-.707.707l2 2a.498.498 0 00.708 0l2-2a.5.5 0 000-.707zM17.354 10.146l-2-2a.5.5 0 00-.707.707l1.146 1.146H13.5a.5.5 0 000 1h2.293l-1.146 1.146a.5.5 0 00.708.707l2-2a.5.5 0 000-.707zM5.5 10H3.207l1.146-1.146a.5.5 0 00-.707-.707l-2 2a.5.5 0 000 .707l2 2a.498.498 0 00.708 0 .5.5 0 000-.707l-1.146-1.146h2.293a.5.5 0 000-1z" />
            </svg>
        </span>
    );
}

LiniExpand3.propTypes = {
    size: PropTypes.number.isRequired,
};
