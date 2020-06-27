import React from 'react';
import PropTypes from 'prop-types';

export default function LiniMicMute({ size, ...props }) {
    let className = 'Component Lini LiniMicMute';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M16 10.5a.5.5 0 00-1 0c0 3.033-2.467 5.5-5.5 5.5a5.468 5.468 0 01-3.286-1.092l1.25-1.563A3.48 3.48 0 009.5 14c1.93 0 3.5-1.57 3.5-3.5V6.425l2.89-3.613a.5.5 0 00-.781-.625l-2.11 2.637v-.325c0-1.93-1.57-3.5-3.5-3.5s-3.5 1.57-3.5 3.5v6c0 .81.277 1.556.74 2.15l-1.271 1.588a5.48 5.48 0 01-1.469-3.738.5.5 0 00-1 0c0 1.758.702 3.354 1.839 4.526l-1.73 2.162a.5.5 0 00.781.625l1.699-2.124a6.463 6.463 0 003.411 1.292v2.019h-1.5a.5.5 0 000 1h4a.5.5 0 000-1h-1.5V16.98a6.509 6.509 0 006-6.481zm-4 0c0 1.378-1.122 2.5-2.5 2.5a2.489 2.489 0 01-1.41-.437L12 7.675V10.5zm-5 0v-6C7 3.122 8.122 2 9.5 2S12 3.122 12 4.5v1.575l-4.61 5.763A2.487 2.487 0 017 10.5z" />
            </svg>
        </span>
    );
}

LiniMicMute.propTypes = {
    size: PropTypes.number.isRequired,
};
