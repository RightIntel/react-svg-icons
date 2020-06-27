import React from 'react';
import PropTypes from 'prop-types';

export default function LiniPen3({ size, ...props }) {
    let className = 'Component Lini LiniPen3';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M19.354 6.146l-6-6a.5.5 0 00-.619-.07l-8 5a.497.497 0 00-.235.422c0 .01-.013 1.011-.566 3.14-.511 1.965-1.599 5.321-3.886 10.147a.502.502 0 00.452.714.505.505 0 00.214-.048c4.826-2.286 8.182-3.375 10.147-3.886 2.13-.553 3.13-.566 3.139-.566a.5.5 0 00.424-.235l5-8a.502.502 0 00-.07-.619zm-5.64 7.868c-.963.073-4.362.531-10.907 3.386l6.714-6.714c.324.199.705.314 1.112.314 1.176 0 2.133-.957 2.133-2.133s-.957-2.133-2.133-2.133A2.136 2.136 0 008.5 8.867c0 .407.115.788.314 1.112L2.1 16.693c2.856-6.546 3.313-9.945 3.386-10.907l7.441-4.651 5.437 5.438-4.651 7.441zM9.5 8.867a1.134 1.134 0 012.266 0 1.134 1.134 0 01-2.266 0z" />
            </svg>
        </span>
    );
}

LiniPen3.propTypes = {
    size: PropTypes.number.isRequired,
};
