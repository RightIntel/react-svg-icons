import React from 'react';
import PropTypes from 'prop-types';

export default function LiniSpeedSlow({ size, ...props }) {
    let className = 'Component Lini LiniSpeedSlow';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M9.5 15c-.401 0-.777-.156-1.061-.439-.402-.402-3.064-4.252-3.594-5.019a.499.499 0 01.695-.695c.768.529 4.617 3.191 5.019 3.594.283.283.439.66.439 1.061s-.156.777-.439 1.061a1.49 1.49 0 01-1.061.439zm-2.239-3.739c.945 1.344 1.73 2.436 1.886 2.593a.497.497 0 00.707 0 .5.5 0 000-.707c-.157-.155-1.248-.941-2.593-1.885z" />
                <path d="M16.218 5.783C14.424 3.989 12.038 3 9.5 3s-4.923.988-6.717 2.783S.001 9.963.001 12.5c0 1.889.553 3.714 1.6 5.278a.5.5 0 00.416.222h14.969a.5.5 0 00.416-.222 9.454 9.454 0 001.6-5.278 9.436 9.436 0 00-2.782-6.717zM16.712 17H2.287a8.453 8.453 0 01-1.273-4h.485a.5.5 0 000-1h-.485c.25-4.29 3.695-7.735 7.985-7.985V4.5a.5.5 0 001 0v-.485c4.29.25 7.735 3.695 7.985 7.985h-.485a.5.5 0 000 1h.485a8.453 8.453 0 01-1.273 4z" />
            </svg>
        </span>
    );
}

LiniSpeedSlow.propTypes = {
    size: PropTypes.number.isRequired,
};
