import React from 'react';
import PropTypes from 'prop-types';

export default function LiniBone({ size, ...props }) {
    let className = 'Component Lini LiniBone';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M14.5 20a2.503 2.503 0 01-2.5-2.5V16c0-.415-.267-1.06-.561-1.354L5.353 8.56c-.293-.293-.939-.561-1.354-.561h-1.5c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5a.5.5 0 00.5-.5c0-1.378 1.122-2.5 2.5-2.5s2.5 1.122 2.5 2.5v1.5c0 .415.267 1.06.561 1.354l6.086 6.086c.293.293.939.561 1.354.561h1.5c1.378 0 2.5 1.122 2.5 2.5S18.878 17 17.5 17a.5.5 0 00-.5.5c0 1.378-1.122 2.5-2.5 2.5zm-9-19C4.673 1 4 1.673 4 2.5S3.327 4 2.5 4 1 4.673 1 5.5 1.673 7 2.5 7H4c.688 0 1.574.367 2.061.854l6.086 6.086c.487.487.854 1.372.854 2.061v1.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5.673-1.5 1.5-1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5h-1.5c-.688 0-1.574-.367-2.061-.854L7.854 6.061C7.367 5.574 7 4.689 7 4V2.5C7 1.673 6.327 1 5.5 1z" />
            </svg>
        </span>
    );
}

LiniBone.propTypes = {
    size: PropTypes.number.isRequired,
};
