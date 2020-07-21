import React from 'react';
import PropTypes from 'prop-types';

export default function LiniCartFull({ size, ...props }) {
    let className = 'Component Lini LiniCartFull';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M8 20c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1zM15 20c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1zM17.539 4.467A1.351 1.351 0 0016.5 4h-.293l-2.854-2.854a.5.5 0 00-.707 0l-1 1a.5.5 0 00.707.707l.646-.646L14.792 4h-2.586L8.852.646a.5.5 0 00-.707 0L4.791 4h-.536l-.099-.596A1.718 1.718 0 002.498 2h-1a.5.5 0 000 1h1c.307 0 .621.266.671.569L4.84 13.596A1.718 1.718 0 006.498 15h10a.5.5 0 000-1h-10a.724.724 0 01-.671-.569l-.247-1.48 9.965-.867c.775-.067 1.483-.721 1.611-1.489l.671-4.027a1.354 1.354 0 00-.289-1.102zM8.5 1.707L10.793 4H6.207L8.5 1.707zm8.342 3.697l-.671 4.027c-.053.316-.391.629-.711.657l-10.043.873-.994-5.962h12.076c.117 0 .215.04.276.113s.085.176.066.291z" />
            </svg>
        </span>
    );
}

LiniCartFull.propTypes = {
    size: PropTypes.number.isRequired,
};