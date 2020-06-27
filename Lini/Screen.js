import React from 'react';
import PropTypes from 'prop-types';

export default function LiniScreen({ size, ...props }) {
    let className = 'Component Lini LiniScreen';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M17.5 2h-16C.673 2 0 2.673 0 3.5v10c0 .827.673 1.5 1.5 1.5H9v2H5.5a.5.5 0 000 1h8a.5.5 0 000-1H10v-2h7.5c.827 0 1.5-.673 1.5-1.5v-10c0-.827-.673-1.5-1.5-1.5zm.5 11.5a.5.5 0 01-.5.5h-16a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5h16a.5.5 0 01.5.5v10z" />
            </svg>
        </span>
    );
}

LiniScreen.propTypes = {
    size: PropTypes.number.isRequired,
};