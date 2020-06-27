import React from 'react';
import PropTypes from 'prop-types';

export default function LiniTextSize({ size, ...props }) {
    let className = 'Component Lini LiniTextSize';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M6.96 16.303l-1.284-2.996-.002-.004-1.714-4a.5.5 0 00-.92 0l-1.714 4-.002.004L.04 16.303a.5.5 0 10.92.394L2.116 14h2.769l1.156 2.697a.5.5 0 00.657.262.501.501 0 00.263-.657zM2.544 13l.956-2.231L4.456 13H2.544zM19.962 16.308l-2.083-5-.002-.004-2.915-6.996a.502.502 0 00-.924 0l-2.915 6.996-.002.004-2.083 5a.5.5 0 00.923.385l1.955-4.692h5.167l1.955 4.692a.5.5 0 10.923-.385zM12.333 11L14.5 5.8l2.167 5.2h-4.333z" />
            </svg>
        </span>
    );
}

LiniTextSize.propTypes = {
    size: PropTypes.number.isRequired,
};
