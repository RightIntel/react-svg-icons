import React from 'react';
import PropTypes from 'prop-types';

export default function LiniBorderRight({ size, ...props }) {
    let className = 'Component Lini LiniBorderRight';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M1 10h1v1H1v-1zM3 10h1v1H3v-1zM5 10h1v1H5v-1zM7 10h1v1H7v-1zM9 10h1v1H9v-1zM11 10h1v1h-1v-1zM13 10h1v1h-1v-1zM15 10h1v1h-1v-1zM9 16h1v1H9v-1zM9 14h1v1H9v-1zM9 12h1v1H9v-1zM9 8h1v1H9V8zM9 6h1v1H9V6zM9 4h1v1H9V4zM9 2h1v1H9V2zM1 16h1v1H1v-1zM1 18h1v1H1v-1zM1 14h1v1H1v-1zM1 12h1v1H1v-1zM1 2h1v1H1V2zM1 8h1v1H1V8zM1 6h1v1H1V6zM1 4h1v1H1V4zM9 18h1v1H9v-1zM3 2h1v1H3V2zM5 2h1v1H5V2zM7 2h1v1H7V2zM11 2h1v1h-1V2zM13 2h1v1h-1V2zM15 2h1v1h-1V2zM3 18h1v1H3v-1zM5 18h1v1H5v-1zM7 18h1v1H7v-1zM11 18h1v1h-1v-1zM13 18h1v1h-1v-1zM15 18h1v1h-1v-1zM17.5 19a.5.5 0 01-.5-.5v-16a.5.5 0 011 0v16a.5.5 0 01-.5.5z" />
            </svg>
        </span>
    );
}

LiniBorderRight.propTypes = {
    size: PropTypes.number.isRequired,
};