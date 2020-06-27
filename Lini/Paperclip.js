import React from 'react';
import PropTypes from 'prop-types';

export default function LiniPaperclip({ size, ...props }) {
    let className = 'Component Lini LiniPaperclip';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M9.5 20A4.505 4.505 0 015 15.5v-12C5 1.57 6.57 0 8.5 0S12 1.57 12 3.5v11c0 1.378-1.122 2.5-2.5 2.5S7 15.878 7 14.5v-6a.5.5 0 011 0v6c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5v-11C11 2.122 9.878 1 8.5 1S6 2.122 6 3.5v12C6 17.43 7.57 19 9.5 19s3.5-1.57 3.5-3.5v-7a.5.5 0 011 0v7c0 2.481-2.019 4.5-4.5 4.5z" />
            </svg>
        </span>
    );
}

LiniPaperclip.propTypes = {
    size: PropTypes.number.isRequired,
};
