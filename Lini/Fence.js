import React from 'react';
import PropTypes from 'prop-types';

export default function LiniFence({ size, ...props }) {
    let className = 'Component Lini LiniFence';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M3 6.5a.5.5 0 11-1 0 .5.5 0 011 0zM10 6.5a.5.5 0 11-1 0 .5.5 0 011 0zM17 6.5a.5.5 0 11-1 0 .5.5 0 011 0z" />
                <path d="M18.854 2.646l-2-2a.5.5 0 00-.707 0l-2 2a.5.5 0 00-.146.354v1h-2V3a.504.504 0 00-.146-.354l-2-2a.5.5 0 00-.707 0l-2 2A.5.5 0 007.002 3v1h-2V3a.504.504 0 00-.146-.354l-2-2a.5.5 0 00-.707 0l-2 2A.5.5 0 00.003 3v16.5a.5.5 0 00.5.5h4a.5.5 0 00.5-.5V18h2v1.5a.5.5 0 00.5.5h4a.5.5 0 00.5-.5V18h2v1.5a.5.5 0 00.5.5h4a.5.5 0 00.5-.5V3a.504.504 0 00-.146-.354zM12 9h2v4h-2V9zm2-4v3h-2V5h2zM5 9h2v4H5V9zm2-4v3H5V5h2zM4 19H1V3.207l1.5-1.5 1.5 1.5V19zm1-2v-3h2v3H5zm6 2H8V3.207l1.5-1.5 1.5 1.5V19zm1-2v-3h2v3h-2zm6 2h-3V3.207l1.5-1.5 1.5 1.5V19z" />
                <path d="M3 15.5a.5.5 0 11-1 0 .5.5 0 011 0zM10 15.5a.5.5 0 11-1 0 .5.5 0 011 0zM17 15.5a.5.5 0 11-1 0 .5.5 0 011 0z" />
            </svg>
        </span>
    );
}

LiniFence.propTypes = {
    size: PropTypes.number.isRequired,
};
