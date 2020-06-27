import React from 'react';
import PropTypes from 'prop-types';

export default function LiniSubtract({ size, ...props }) {
    let className = 'Component Lini LiniSubtract';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M16 7h1v1h-1V7zM16 19h1v1h-1v-1zM14 19h1v1h-1v-1zM12 19h1v1h-1v-1zM10 19h1v1h-1v-1zM8 19h1v1H8v-1zM18 15h1v1h-1v-1zM18 13h1v1h-1v-1zM18 17h1v1h-1v-1zM18 9h1v1h-1V9zM18 11h1v1h-1v-1zM6 17h1v1H6v-1zM14 7h1v1h-1V7zM11.5 1h-10C.673 1 0 1.673 0 2.5v10c0 .827.673 1.5 1.5 1.5H7V8.5a.5.5 0 01.5-.5H13V2.5c0-.827-.673-1.5-1.5-1.5zm-4 6C6.673 7 6 7.673 6 8.5V13H1.5a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5h10a.5.5 0 01.5.5V7H7.5zM6 15h1v1H6v-1zM18 7h1v1h-1V7zM18 19h1v1h-1v-1zM6 19h1v1H6v-1z" />
            </svg>
        </span>
    );
}

LiniSubtract.propTypes = {
    size: PropTypes.number.isRequired,
};
