import React from 'react';
import PropTypes from 'prop-types';

export default function LiniCameraPlay({ size, ...props }) {
    let className = 'Component Lini LiniCameraPlay';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M19.131 17.053c-.242 0-.485-.097-.724-.288l-3.438-2.751c-.552-.442-.969-1.308-.969-2.015v-3c0-.707.416-1.573.969-2.015l3.438-2.751c.239-.191.482-.288.724-.288.433 0 .869.326.869 1.053v11c0 .278-.064.512-.19.694a.815.815 0 01-.679.359zM19 5.04l-3.407 2.725c-.311.248-.593.837-.593 1.234v3c0 .398.283.986.593 1.234L19 15.958V5.039zM11.5 17h-10C.673 17 0 16.327 0 15.5v-10C0 4.673.673 4 1.5 4h10c.827 0 1.5.673 1.5 1.5v10c0 .827-.673 1.5-1.5 1.5zM1.5 5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5h-10z" />
                <path d="M4.5 14a.5.5 0 01-.5-.5v-6a.5.5 0 01.758-.429l5 3a.499.499 0 010 .858l-5 3a.503.503 0 01-.257.071zM5 8.383v4.234L8.528 10.5 5 8.383z" />
            </svg>
        </span>
    );
}

LiniCameraPlay.propTypes = {
    size: PropTypes.number.isRequired,
};
