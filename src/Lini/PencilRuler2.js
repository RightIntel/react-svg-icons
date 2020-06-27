import React from 'react';
import PropTypes from 'prop-types';

export default function LiniPencilRuler2({ size, ...props }) {
    let className = 'Component Lini LiniPencilRuler2';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M19.5 6a5.006 5.006 0 00-7.153-4.514.493.493 0 00-.138.098L1.646 12.147a.497.497 0 00-.141.283l-1 7a.5.5 0 00.565.565l7-1a.503.503 0 00.283-.141L18.908 8.299l.001-.001.007-.007a.514.514 0 00.098-.138A4.95 4.95 0 0019.5 6zm-1 0c0 .575-.119 1.129-.354 1.647l-1.15 1.15a5.507 5.507 0 00-5.293-5.293l1.15-1.15A4.004 4.004 0 0118.5 6zM2.005 16l.423-2.964a4.505 4.505 0 015.036 5.036l-2.964.423A2.503 2.503 0 002.005 16zm8.616-11.414a4.474 4.474 0 013.686.9l-7.79 7.79a5.478 5.478 0 00-3.315-1.271l7.418-7.418zm-3.396 9.396l7.79-7.79a4.48 4.48 0 01.9 3.686l-7.418 7.418a5.478 5.478 0 00-1.271-3.315zm-5.364 3.025a1.502 1.502 0 011.632 1.632l-1.904.272.272-1.904zM6.5 0h-5C.673 0 0 .673 0 1.5v10a.5.5 0 001 0V9h1.5a.5.5 0 000-1H1V7h.5a.5.5 0 000-1H1V5h1.5a.5.5 0 000-1H1V3h.5a.5.5 0 000-1H1v-.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v2a.5.5 0 001 0v-2C8 .673 7.327 0 6.5 0z" />
            </svg>
        </span>
    );
}

LiniPencilRuler2.propTypes = {
    size: PropTypes.number.isRequired,
};
