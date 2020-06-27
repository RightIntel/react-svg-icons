import React from 'react';
import PropTypes from 'prop-types';

export default function LiniFileLock({ size, ...props }) {
    let className = 'Component Lini LiniFileLock';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M17.854 5.646l-4.5-4.5A.5.5 0 0013 1H3.5C2.673 1 2 1.673 2 2.5v16c0 .827.673 1.5 1.5 1.5h13c.827 0 1.5-.673 1.5-1.5V6a.504.504 0 00-.146-.354zM16.793 6H13.5a.5.5 0 01-.5-.5V2.207L16.793 6zM16.5 19h-13a.5.5 0 01-.5-.5v-16a.5.5 0 01.5-.5H12v3.5c0 .827.673 1.5 1.5 1.5H17v11.5a.5.5 0 01-.5.5z" />
                <path d="M12 12.086V11c0-1.103-.897-2-2-2s-2 .897-2 2v1.086c-.582.206-1 .762-1 1.414v2c0 .827.673 1.5 1.5 1.5h3c.827 0 1.5-.673 1.5-1.5v-2c0-.652-.418-1.208-1-1.414zM10 10c.551 0 1 .449 1 1v1H9v-1c0-.551.449-1 1-1zm2 5.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v2z" />
            </svg>
        </span>
    );
}

LiniFileLock.propTypes = {
    size: PropTypes.number.isRequired,
};
