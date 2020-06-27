import React from 'react';
import PropTypes from 'prop-types';

export default function LiniEqualizer({ size, ...props }) {
    let className = 'Component Lini LiniEqualizer';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M2.5 20a.5.5 0 01-.5-.5v-8a.5.5 0 011 0v8a.5.5 0 01-.5.5zM2.5 6a.5.5 0 01-.5-.5v-5a.5.5 0 011 0v5a.5.5 0 01-.5.5zM3.5 10h-2C.673 10 0 9.327 0 8.5S.673 7 1.5 7h2C4.327 7 5 7.673 5 8.5S4.327 10 3.5 10zm-2-2a.5.5 0 000 1h2a.5.5 0 000-1h-2zM9.5 20a.5.5 0 01-.5-.5v-4a.5.5 0 011 0v4a.5.5 0 01-.5.5zM9.5 10a.5.5 0 01-.5-.5v-9a.5.5 0 011 0v9a.5.5 0 01-.5.5zM10.5 14h-2c-.827 0-1.5-.673-1.5-1.5S7.673 11 8.5 11h2c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5zm-2-2a.5.5 0 000 1h2a.5.5 0 000-1h-2zM16.5 20a.5.5 0 01-.5-.5v-10a.5.5 0 011 0v10a.5.5 0 01-.5.5zM16.5 4a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v3a.5.5 0 01-.5.5zM17.5 8h-2c-.827 0-1.5-.673-1.5-1.5S14.673 5 15.5 5h2c.827 0 1.5.673 1.5 1.5S18.327 8 17.5 8zm-2-2a.5.5 0 000 1h2a.5.5 0 000-1h-2z" />
            </svg>
        </span>
    );
}

LiniEqualizer.propTypes = {
    size: PropTypes.number.isRequired,
};
