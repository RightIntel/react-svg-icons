import React from 'react';
import PropTypes from 'prop-types';

export default function LiniTrailer({ size, ...props }) {
    let className = 'Component Lini LiniTrailer';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M19.854 13.439l-.717-5.02A1.682 1.682 0 0017.501 7h-4c-.827 0-1.5.673-1.5 1.5V17H5.732a2 2 0 00-3.462 0H.501a.5.5 0 000 1h1.5c0 1.103.897 2 2 2s2-.897 2-2h6.086c.206.582.762 1 1.414 1h.769a2 2 0 003.462 0h.769c.827 0 1.5-.673 1.5-1.5v-2c0-.571-.066-1.495-.146-2.061zM4 19c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zm14.638-7H15v-2h3.352l.286 2zM16 19c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zm2.5-1H18c0-1.103-.897-2-2-2s-2 .897-2 2h-.5a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h4a.69.69 0 01.646.561l.063.439H14.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h4.281l.083.581c.053.374.101.938.123 1.419H18.5a.5.5 0 000 1h.5v1.5a.5.5 0 01-.5.5z" />
            </svg>
        </span>
    );
}

LiniTrailer.propTypes = {
    size: PropTypes.number.isRequired,
};
