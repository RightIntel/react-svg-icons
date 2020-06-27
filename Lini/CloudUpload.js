import React from 'react';
import PropTypes from 'prop-types';

export default function LiniCloudUpload({ size, ...props }) {
    let className = 'Component Lini LiniCloudUpload';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M12.853 11.647l-2-2a.5.5 0 00-.707 0l-2 2a.5.5 0 00.707.707l1.146-1.146v4.293a.5.5 0 001 0v-4.293l1.147 1.146a.497.497 0 00.706-.001.5.5 0 000-.707z" />
                <path d="M16.006 16H12.5a.5.5 0 010-1h3.506C17.657 15 19 13.657 19 12.006a2.997 2.997 0 00-4.02-2.814.5.5 0 01-.534-.814c.357-.376.554-.865.554-1.379 0-1.103-.897-2-2-2-.642 0-1.229.297-1.61.814-.23.312-.365.678-.388 1.057a.5.5 0 01-.908.257A5.008 5.008 0 006 4.999c-2.757 0-5 2.243-5 5s2.243 5 5 5h2.5a.5.5 0 010 1H6c-3.308 0-6-2.692-6-6s2.692-6 6-6c1.602 0 3.137.643 4.26 1.775A3.014 3.014 0 0113 3.999a3.004 3.004 0 012.822 4.017A3.999 3.999 0 0120 12.006 3.999 3.999 0 0116.006 16z" />
            </svg>
        </span>
    );
}

LiniCloudUpload.propTypes = {
    size: PropTypes.number.isRequired,
};
