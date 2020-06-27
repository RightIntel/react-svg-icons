import React from 'react';
import PropTypes from 'prop-types';

export default function LiniFileCharts({ size, ...props }) {
    let className = 'Component Lini LiniFileCharts';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M17.854 5.646l-4.5-4.5A.5.5 0 0013 1H3.5C2.673 1 2 1.673 2 2.5v16c0 .827.673 1.5 1.5 1.5h13c.827 0 1.5-.673 1.5-1.5V6a.504.504 0 00-.146-.354zM16.793 6H13.5a.5.5 0 01-.5-.5V2.207L16.793 6zM16.5 19h-13a.5.5 0 01-.5-.5v-16a.5.5 0 01.5-.5H12v3.5c0 .827.673 1.5 1.5 1.5H17v11.5a.5.5 0 01-.5.5z" />
                <path d="M14.5 14h-1a.5.5 0 010-1h1a.5.5 0 010 1zM14.5 16h-1a.5.5 0 010-1h1a.5.5 0 010 1zM8.5 10a.5.5 0 00-.5.5v.5c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3h.5a.5.5 0 00.5-.5c0-1.93-1.57-3.5-3.5-3.5zm.5 1.05c.978.199 1.75.972 1.95 1.95H9v-1.95zM8 16c-1.103 0-2-.897-2-2s.897-2 2-2v1.5a.5.5 0 00.5.5H10c0 1.103-.897 2-2 2zM14.5 12h-1a.5.5 0 010-1h1a.5.5 0 010 1z" />
            </svg>
        </span>
    );
}

LiniFileCharts.propTypes = {
    size: PropTypes.number.isRequired,
};
