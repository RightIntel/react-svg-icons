import React from 'react';
import PropTypes from 'prop-types';

export default function LiniBag2({ size, ...props }) {
    let className = 'Component Lini LiniBag2';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M19.997 19.438l-.998-13.974A.5.5 0 0018.5 5h-2.293l-3.854-3.854a.5.5 0 00-.707 0l-.5.5a.5.5 0 00.707.707l.146-.146L14.792 5h-1.586L8.852.646a.5.5 0 00-.707 0L3.791 5H1.498a.5.5 0 00-.499.464l-1 14a.497.497 0 00.499.535h19.001a.5.5 0 00.496-.562zM8.5 1.707L11.793 5H5.207L8.5 1.707zM1.037 19l.929-13h16.068l.929 13H1.037z" />
                <path d="M10 14c-1.103 0-2.127-.596-2.884-1.678C6.397 11.294 6 9.937 6 8.5a.5.5 0 011 0c0 1.234.332 2.388.935 3.249C8.5 12.556 9.233 13 10 13s1.5-.444 2.065-1.251c.603-.861.935-2.015.935-3.249a.5.5 0 011 0c0 1.437-.396 2.795-1.116 3.822C12.127 13.404 11.102 14 10 14z" />
            </svg>
        </span>
    );
}

LiniBag2.propTypes = {
    size: PropTypes.number.isRequired,
};
