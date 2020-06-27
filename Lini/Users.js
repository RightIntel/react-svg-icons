import React from 'react';
import PropTypes from 'prop-types';

export default function LiniUsers({ size, ...props }) {
    let className = 'Component Lini LiniUsers';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.927 16.158a5.36 5.36 0 00-1.296-.997c-.303-.604-.898-1.399-2.058-2.033a7.868 7.868 0 00-1.607-.646A4.004 4.004 0 0016 9a4.004 4.004 0 00-2.354-3.645 3.99 3.99 0 00-2-2.001A3.993 3.993 0 008 1.001c-2.206 0-4 1.794-4 4a3.993 3.993 0 002.353 3.646 3.978 3.978 0 001.012 1.364c-1.498.047-2.797.263-3.869.644-1.009.359-1.824.865-2.424 1.504C.011 13.29-.001 14.452-.001 14.501c0 .827.673 1.5 1.5 1.5h.568a2.455 2.455 0 00-.068.5c0 .827.673 1.5 1.5 1.5h.568a2.455 2.455 0 00-.068.5c0 .827.673 1.5 1.5 1.5h13c.827 0 1.5-.673 1.5-1.5 0-.049-.012-1.211-1.073-2.342zM15 9c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zM5 5c0-1.654 1.346-3 3-3a3.02 3.02 0 012.24 1.008A4.004 4.004 0 006.008 7.24 3.02 3.02 0 015 5zm2 2c0-1.654 1.346-3 3-3 .865 0 1.678.382 2.239 1.007a4.004 4.004 0 00-4.232 4.232A3.019 3.019 0 017 7zm-5.5 8a.5.5 0 01-.5-.497c.001-.055.037-.879.855-1.716C2.652 11.972 4.365 11 8 11c.183 0 .364.003.542.008.22.378.5.716.827 1.002-1.499.047-2.799.263-3.872.644-1.009.359-1.824.865-2.424 1.504a4.298 4.298 0 00-.618.842H1.5zm2 2a.5.5 0 01-.5-.497c.002-.056.038-.88.855-1.716C4.652 13.972 6.365 13 10 13c3.035 0 4.753.668 5.725 1.417C14.658 14.14 13.41 14 12 14c-1.768 0-3.283.22-4.503.654-1.009.359-1.824.865-2.424 1.504a4.298 4.298 0 00-.618.842H3.5zm15 2h-13a.5.5 0 01-.5-.497c.001-.055.037-.879.855-1.716C6.652 15.972 8.365 15 12 15s5.348.972 6.145 1.787c.818.837.853 1.661.855 1.716a.5.5 0 01-.5.497z" />
            </svg>
        </span>
    );
}

LiniUsers.propTypes = {
    size: PropTypes.number.isRequired,
};
