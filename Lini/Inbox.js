import React from 'react';
import PropTypes from 'prop-types';

export default function LiniInbox({ size, ...props }) {
    let className = 'Component Lini LiniInbox';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M19.557 10.383l-2.698-6.168c-.298-.682-1.115-1.216-1.859-1.216H5c-.744 0-1.561.534-1.859 1.216L.443 10.383C.195 10.951 0 11.88 0 12.5v4c0 .827.673 1.5 1.5 1.5h17c.827 0 1.5-.673 1.5-1.5v-4c0-.619-.194-1.549-.443-2.117zm-15.5-5.766C4.198 4.294 4.648 4 5 4h10c.352 0 .802.294.943.617l2.698 6.168c.03.069.06.148.089.233A1.457 1.457 0 0018.5 11h-6a.5.5 0 00-.5.5v.5c0 1.103-.897 2-2 2s-2-.897-2-2v-.5a.5.5 0 00-.5-.5h-6c-.078 0-.155.006-.23.018.029-.085.058-.164.089-.233l2.698-6.168zM19 16.5a.5.5 0 01-.5.5h-17a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5H7c0 1.654 1.346 3 3 3s3-1.346 3-3h5.5a.5.5 0 01.5.5v4z" />
            </svg>
        </span>
    );
}

LiniInbox.propTypes = {
    size: PropTypes.number.isRequired,
};