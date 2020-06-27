import React from 'react';
import PropTypes from 'prop-types';

export default function LiniArchive({ size, ...props }) {
    let className = 'Component Lini LiniArchive';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M11.5 16h-3a.5.5 0 010-1h3a.5.5 0 010 1z" />
                <path d="M19.557 11.383l-2.698-6.168c-.298-.682-1.115-1.216-1.859-1.216H5c-.744 0-1.561.534-1.859 1.216L.443 11.383C.195 11.951 0 12.88 0 13.5v4c0 .827.673 1.5 1.5 1.5h17c.827 0 1.5-.673 1.5-1.5v-4c0-.619-.194-1.549-.443-2.117zm-15.5-5.766C4.198 5.294 4.648 5 5 5h10c.352 0 .802.294.943.617l2.698 6.168c.03.069.06.148.089.233A1.457 1.457 0 0018.5 12h-17c-.078 0-.155.006-.23.018.029-.085.058-.164.089-.233l2.698-6.168zM19 17.5a.5.5 0 01-.5.5h-17a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5h17a.5.5 0 01.5.5v4z" />
                <path d="M16.5 11h-13a.5.5 0 010-1h13a.5.5 0 010 1zM15.5 9h-11a.5.5 0 010-1h11a.5.5 0 010 1zM14.5 7h-9a.5.5 0 010-1h9a.5.5 0 010 1z" />
            </svg>
        </span>
    );
}

LiniArchive.propTypes = {
    size: PropTypes.number.isRequired,
};
