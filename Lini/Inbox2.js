import React from 'react';
import PropTypes from 'prop-types';

export default function LiniInbox2({ size, ...props }) {
    let className = 'Component Lini LiniInbox2';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.5 9.382l-2.606-5.211C15.566 3.514 14.734 3 14 3h-2.5a.5.5 0 000 1H14c.362 0 .838.295 1 .618l2.606 5.211c.028.055.055.117.081.183A1.433 1.433 0 0017.5 10h-5a.5.5 0 00-.5.5c0 1.378-1.122 2.5-2.5 2.5S7 11.878 7 10.5a.5.5 0 00-.5-.5h-5c-.063 0-.125.004-.187.012.026-.066.053-.128.081-.183L4 4.618C4.162 4.295 4.638 4 5 4h2.5a.5.5 0 000-1H5c-.734 0-1.566.514-1.894 1.171L.5 9.382C.22 9.943 0 10.873 0 11.5v4c0 .827.673 1.5 1.5 1.5h16c.827 0 1.5-.673 1.5-1.5v-4c0-.627-.22-1.557-.5-2.118zM18 15.5a.5.5 0 01-.5.5h-16a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5h4.536c.243 1.694 1.704 3 3.464 3s3.221-1.306 3.464-3H17.5a.5.5 0 01.5.5v4z" />
                <path d="M11.854 6.646a.5.5 0 00-.707 0l-1.146 1.146V3.499a.5.5 0 00-1 0v4.293L7.855 6.646a.5.5 0 00-.707.707l2 2a.498.498 0 00.708 0l2-2a.5.5 0 000-.707z" />
            </svg>
        </span>
    );
}

LiniInbox2.propTypes = {
    size: PropTypes.number.isRequired,
};
