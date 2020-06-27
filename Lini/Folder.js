import React from 'react';
import PropTypes from 'prop-types';

export default function LiniFolder({ size, ...props }) {
    let className = 'Component Lini LiniFolder';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.5 5H11a.404.404 0 01-.276-.171l-.553-1.106c-.206-.413-.71-.724-1.171-.724H2c-.461 0-.965.311-1.171.724L.276 4.829A3 3 0 000 6v10.5c0 .827.673 1.5 1.5 1.5h17c.827 0 1.5-.673 1.5-1.5v-10c0-.827-.673-1.5-1.5-1.5zm.5 11.5a.5.5 0 01-.5.5h-17a.5.5 0 01-.5-.5V6c0-.196.083-.548.171-.724l.553-1.106A.406.406 0 012 3.999h7c.086 0 .238.094.276.171l.553 1.106c.206.413.71.724 1.171.724h7.5a.5.5 0 01.5.5v10z" />
            </svg>
        </span>
    );
}

LiniFolder.propTypes = {
    size: PropTypes.number.isRequired,
};
