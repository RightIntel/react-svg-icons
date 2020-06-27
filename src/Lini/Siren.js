import React from 'react';
import PropTypes from 'prop-types';

export default function LiniSiren({ size, ...props }) {
    let className = 'Component Lini LiniSiren';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M9.5 7a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v3a.5.5 0 01-.5.5zM18.5 13h-2a.5.5 0 010-1h2a.5.5 0 010 1zM2.5 13h-2a.5.5 0 010-1h2a.5.5 0 010 1zM15 15.086V13.5C15 10.467 12.533 8 9.5 8S4 10.467 4 13.5v1.586c-.582.206-1 .762-1 1.414 0 .827.673 1.5 1.5 1.5h10c.827 0 1.5-.673 1.5-1.5 0-.652-.418-1.208-1-1.414zM9.5 9c2.481 0 4.5 2.019 4.5 4.5V15H5v-1.5C5 11.019 7.019 9 9.5 9zm5 8h-10a.5.5 0 010-1h10a.5.5 0 010 1zM14.5 8.5a.5.5 0 01-.354-.853l2-2a.5.5 0 01.707.707l-2 2a.498.498 0 01-.354.146zM4.5 8.5a.502.502 0 01-.354-.146l-2-2a.5.5 0 01.707-.707l2 2a.5.5 0 01-.354.853z" />
            </svg>
        </span>
    );
}

LiniSiren.propTypes = {
    size: PropTypes.number.isRequired,
};
