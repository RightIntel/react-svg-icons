import React from 'react';
import PropTypes from 'prop-types';

export default function LiniRoad({ size, ...props }) {
    let className = 'Component Lini LiniRoad';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M.501 20a.5.5 0 01-.489-.603l4-19a.5.5 0 01.978.206l-4 19A.5.5 0 01.501 20zM18.499 20a.502.502 0 01-.489-.397l-4-19a.5.5 0 01.978-.206l4 19a.5.5 0 01-.489.603zM9.5 3a.5.5 0 01-.5-.5v-2a.5.5 0 011 0v2a.5.5 0 01-.5.5zM9.5 10a.5.5 0 01-.5-.5v-4a.5.5 0 011 0v4a.5.5 0 01-.5.5zM9.5 20a.5.5 0 01-.5-.5v-6a.5.5 0 011 0v6a.5.5 0 01-.5.5z" />
            </svg>
        </span>
    );
}

LiniRoad.propTypes = {
    size: PropTypes.number.isRequired,
};
