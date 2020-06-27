import React from 'react';
import PropTypes from 'prop-types';

export default function LiniConstructionCone({ size, ...props }) {
    let className = 'Component Lini LiniConstructionCone';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.5 17h-.653L12.32 2.261C12.055 1.554 11.256 1 10.501 1h-1c-.755 0-1.554.554-1.819 1.261L2.155 17h-.653c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5h17c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5zm-4.722-8H6.221l1.125-3h5.307l1.125 3zm.375 1l1.125 3H4.721l1.125-3h8.307zM8.617 2.612c.12-.32.541-.612.883-.612h1c.342 0 .763.292.883.612L12.279 5H7.722l.896-2.388zM4.347 14h11.307l1.125 3H3.222l1.125-3zM18.5 19h-17a.5.5 0 010-1h17a.5.5 0 010 1z" />
            </svg>
        </span>
    );
}

LiniConstructionCone.propTypes = {
    size: PropTypes.number.isRequired,
};
