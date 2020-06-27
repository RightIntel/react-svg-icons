import React from 'react';
import PropTypes from 'prop-types';

export default function LiniSortNumericAsc({ size, ...props }) {
    let className = 'Component Lini LiniSortNumericAsc';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M8.854 14.646a.5.5 0 00-.707 0l-3.146 3.146V.499a.5.5 0 00-1 0v17.293L.855 14.646a.5.5 0 00-.707.707l4 4a.498.498 0 00.708 0l4-4a.5.5 0 000-.707zM17.5 20h-2c-1.483 0-2.363-1.151-2.4-1.2a.5.5 0 11.8-.6c.004.006.626.8 1.6.8h2c.827 0 1.5-.673 1.5-1.5V17h-3.5c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5h2c1.378 0 2.5 1.122 2.5 2.5v3c0 1.378-1.122 2.5-2.5 2.5zm-2-7c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5H19v-1.5c0-.827-.673-1.5-1.5-1.5h-2zM17.5 0h-2A2.503 2.503 0 0013 2.5v3C13 6.878 14.122 8 15.5 8h2C18.878 8 20 6.878 20 5.5v-3C20 1.122 18.878 0 17.5 0zM14 2.5c0-.827.673-1.5 1.5-1.5h2c.27 0 .524.072.743.198l-4.145 4.836A1.502 1.502 0 0114 5.5v-3zm5 3c0 .827-.673 1.5-1.5 1.5h-2c-.27 0-.524-.072-.743-.198l4.145-4.836c.063.166.098.346.098.534v3z" />
            </svg>
        </span>
    );
}

LiniSortNumericAsc.propTypes = {
    size: PropTypes.number.isRequired,
};
