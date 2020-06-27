import React from 'react';
import PropTypes from 'prop-types';

export default function LiniFlag3({ size, ...props }) {
    let className = 'Component Lini LiniFlag3';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M1.5 19a.5.5 0 01-.5-.5v-15a.5.5 0 011 0v15a.5.5 0 01-.5.5zM3.5 10a.5.5 0 01-.4-.8C3.167 9.11 4.776 7 7 7c1.694 0 2.813.599 3.801 1.127.875.468 1.631.873 2.699.873 2.192 0 3.758-2.08 4.65-3.718A5.325 5.325 0 0115.5 6c-2.207 0-3.347-1.14-4.354-2.146C10.151 2.859 9.292 2 7.5 2 5.276 2 3.913 3.782 3.9 3.8a.5.5 0 11-.8-.6C3.167 3.11 4.781 1 7.5 1c2.207 0 3.347 1.14 4.354 2.146C12.849 4.141 13.708 5 15.5 5c2.224 0 3.587-1.782 3.6-1.8a.5.5 0 01.874.458 14.533 14.533 0 01-1.558 3.119c-.612.918-1.282 1.653-1.991 2.185-.918.688-1.902 1.037-2.925 1.037-1.318 0-2.26-.504-3.171-.991C9.359 8.489 8.443 7.999 7 7.999c-1.73 0-3.087 1.782-3.1 1.8a.498.498 0 01-.4.2z" />
            </svg>
        </span>
    );
}

LiniFlag3.propTypes = {
    size: PropTypes.number.isRequired,
};