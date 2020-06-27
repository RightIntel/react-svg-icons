import React from 'react';
import PropTypes from 'prop-types';

export default function LiniPlane({ size, ...props }) {
    let className = 'Component Lini LiniPlane';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M13.5 20a.501.501 0 01-.121-.015l-3.879-.97-3.879.97A.5.5 0 015 19.5v-2a.5.5 0 01.239-.426l2.182-1.336-.342-3.421-6.331 3.618A.5.5 0 010 15.501v-2a.5.5 0 01.175-.38L7.001 7.27c.013-2.458.232-4.307.653-5.498C8.171.308 8.943.001 9.501.001s1.33.307 1.847 1.771c.421 1.192.64 3.041.653 5.498l6.826 5.851a.5.5 0 01.175.38v2a.5.5 0 01-.748.434l-6.331-3.618-.342 3.421 2.182 1.336a.5.5 0 01.239.426v2a.5.5 0 01-.5.5zm-4-2c.041 0 .081.005.121.015L13 18.86v-1.079l-2.211-1.354a.497.497 0 01-.236-.476l.45-4.5a.502.502 0 01.745-.385L18 14.638v-.908l-6.825-5.85A.5.5 0 0111 7.5C11 2.702 10.192 1 9.5 1S8 2.702 8 7.5a.5.5 0 01-.175.38L1 13.73v.908l6.252-3.573a.499.499 0 01.745.385l.45 4.5a.5.5 0 01-.236.476L6 17.78v1.079l3.379-.845a.501.501 0 01.121-.015z" />
            </svg>
        </span>
    );
}

LiniPlane.propTypes = {
    size: PropTypes.number.isRequired,
};
