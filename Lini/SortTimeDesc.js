import React from 'react';
import PropTypes from 'prop-types';

export default function LiniSortTimeDesc({ size, ...props }) {
    let className = 'Component Lini LiniSortTimeDesc';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M8.854 14.646a.5.5 0 00-.707 0l-3.146 3.146V.499a.5.5 0 00-1 0v17.293L.855 14.646a.5.5 0 00-.707.707l4 4a.498.498 0 00.708 0l4-4a.5.5 0 000-.707zM12.5 15a.5.5 0 01-.224-.948l.597-.298A5.51 5.51 0 019 8.5C9 5.467 11.467 3 14.5 3S20 5.467 20 8.5a.5.5 0 01-1 0C19 6.019 16.981 4 14.5 4S10 6.019 10 8.5s2.019 4.5 4.5 4.5a.5.5 0 01.224.947l-2 1a.497.497 0 01-.223.053z" />
                <path d="M14.5 10a.49.49 0 01-.223-.053l-2-1a.5.5 0 01.447-.895l1.678.839 1.745-1.745a.5.5 0 01.707.707l-2 2a.5.5 0 01-.354.146z" />
            </svg>
        </span>
    );
}

LiniSortTimeDesc.propTypes = {
    size: PropTypes.number.isRequired,
};
