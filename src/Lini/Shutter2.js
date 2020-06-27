import React from 'react';
import PropTypes from 'prop-types';

export default function LiniShutter2({ size, ...props }) {
    let className = 'Component Lini LiniShutter2';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M20 15.49V5.504.501a.5.5 0 00-.5-.5H.5a.5.5 0 00-.5.5v19a.5.5 0 00.5.5h19a.5.5 0 00.5-.5v-4.009-.002zM16.576 19l-8.537-2.668-4.602-4.602L1 4.419V1h2.424l8.537 2.668 4.602 4.602L19 15.581V19h-2.424zm-5.869 0l-1.144-1.144L13.224 19h-2.517zM5.86 19l-.856-2.569 2.502.782L9.293 19H5.86zM1 7.581l.856 2.568L1 9.293V7.581zm0 3.126l1.563 1.563.875 2.624L1 14.132v-3.425zm3.144 3.144l1.838 1.838-1.368-.427-.47-1.411zM9.293 1l1.144 1.144L6.776 1h2.517zm4.847 0l.856 2.569-2.502-.782L10.707 1h3.433zM19 9.293L17.437 7.73l-.875-2.624L19 5.868v3.425zm-3.144-3.144l-1.838-1.838 1.368.427.47 1.411zm2.288 3.702l.856.856v1.712l-.856-2.568zM19 4.82l-2.828-.884L15.193 1h3.806v3.82zM1 15.18l2.828.884L4.807 19H1.001v-3.82z" />
            </svg>
        </span>
    );
}

LiniShutter2.propTypes = {
    size: PropTypes.number.isRequired,
};
