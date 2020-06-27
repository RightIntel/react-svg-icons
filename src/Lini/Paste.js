import React from 'react';
import PropTypes from 'prop-types';

export default function LiniPaste({ size, ...props }) {
    let className = 'Component Lini LiniPaste';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M8.5 3a.498.498 0 01-.5-.5.5.5 0 11.5.5z" />
                <path d="M15.5 7H15V4.5c0-.827-.673-1.5-1.5-1.5h-.946a2.236 2.236 0 00-.831-.697 2.925 2.925 0 00-.764-.254C10.746.885 9.724 0 8.5 0S6.254.885 6.041 2.049a2.913 2.913 0 00-.764.254A2.263 2.263 0 004.446 3H3.5C2.673 3 2 3.673 2 4.5v11c0 .827.673 1.5 1.5 1.5H6v1.5c0 .827.673 1.5 1.5 1.5h8c.827 0 1.5-.673 1.5-1.5v-10c0-.827-.673-1.5-1.5-1.5zM5.698 3.21c.389-.203.8-.21.802-.21a.5.5 0 00.5-.5C7 1.673 7.673 1 8.5 1s1.5.673 1.5 1.5c0 .276.221.5.497.5.004 0 .416.007.805.21.331.173.542.433.638.79H5.06a1.21 1.21 0 01.638-.79zM3.5 16a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h.54c-.027.159-.04.326-.04.5a.5.5 0 00.5.5h8.001a.5.5 0 00.5-.5L13 4.473A3.007 3.007 0 0012.96 4h.54a.5.5 0 01.5.5V7H9a.504.504 0 00-.354.146l-2.5 2.5A.5.5 0 006 10v6H3.5zM9 8.207V9.5a.5.5 0 01-.5.5H7.207L9 8.207zM16 18.5a.5.5 0 01-.5.5h-8a.5.5 0 01-.5-.5V11h1.5c.827 0 1.5-.673 1.5-1.5V8h5.5a.5.5 0 01.5.5v10z" />
            </svg>
        </span>
    );
}

LiniPaste.propTypes = {
    size: PropTypes.number.isRequired,
};
