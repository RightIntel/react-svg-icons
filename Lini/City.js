import React from 'react';
import PropTypes from 'prop-types';

export default function LiniCity({ size, ...props }) {
    let className = 'Component Lini LiniCity';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M9 10h1v1H9v-1zM11 10h1v1h-1v-1zM13 10h1v1h-1v-1zM15 10h1v1h-1v-1zM9 13h1v1H9v-1zM11 13h1v1h-1v-1zM13 13h1v1h-1v-1zM15 13h1v1h-1v-1zM9 16h1v1H9v-1zM11 16h1v1h-1v-1zM13 16h1v1h-1v-1zM15 16h1v1h-1v-1z" />
                <path d="M17.5 7H17V4.5a.504.504 0 00-.146-.354L15 2.292V.499a.5.5 0 00-1 0v1.793l-1.854 1.854A.5.5 0 0012 4.5V5h-2V2.5a.5.5 0 00-.5-.5h-8a.5.5 0 00-.5.5v17a.5.5 0 00.5.5h16a.5.5 0 00.5-.5v-12a.5.5 0 00-.5-.5zM13 4.707l1.5-1.5 1.5 1.5V7h-1V5.5a.5.5 0 00-.5-.5H13v-.293zM14 6v1h-4V6h4zM7 7.5V19H2V3h7v4H7.5a.5.5 0 00-.5.5zM17 19H8V8h9v11z" />
                <path d="M7 4h1v2H7V4zM5 4h1v2H5V4zM3 4h1v2H3V4zM3 7h1v2H3V7zM5 7h1v2H5V7zM3 10h1v2H3v-2zM5 10h1v2H5v-2zM3 13h1v2H3v-2zM5 13h1v2H5v-2zM3 16h1v2H3v-2zM5 16h1v2H5v-2z" />
            </svg>
        </span>
    );
}

LiniCity.propTypes = {
    size: PropTypes.number.isRequired,
};
