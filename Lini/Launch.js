import React from 'react';
import PropTypes from 'prop-types';

export default function LiniLaunch({ size, ...props }) {
    let className = 'Component Lini LiniLaunch';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M19.5 0h-5a.5.5 0 000 1h3.833L7.147 12.146a.5.5 0 10.706.708L19 1.747V5.5a.5.5 0 001 0v-5a.5.5 0 00-.5-.5z" />
                <path d="M16.5 20h-15C.673 20 0 19.327 0 18.5v-15C0 2.673.673 2 1.5 2h10a.5.5 0 010 1h-10a.5.5 0 00-.5.5v15a.5.5 0 00.5.5h15a.5.5 0 00.5-.5v-10a.5.5 0 011 0v10c0 .827-.673 1.5-1.5 1.5z" />
            </svg>
        </span>
    );
}

LiniLaunch.propTypes = {
    size: PropTypes.number.isRequired,
};
