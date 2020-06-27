import React from 'react';
import PropTypes from 'prop-types';

export default function LiniSnow({ size, ...props }) {
    let className = 'Component Lini LiniSnow';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M17.5 10h-2.348l.772-1.235a.5.5 0 00-.848-.53l-.826 1.322L12.652 7H14.5a.5.5 0 000-1h-1.879l1.311-2.248a.5.5 0 10-.864-.504l-1.333 2.285-.811-1.298a.5.5 0 00-.848.53L10.848 6H8.152l.772-1.235a.5.5 0 00-.848-.53l-.811 1.298-1.333-2.285a.5.5 0 00-.864.504L6.379 6H4.5a.5.5 0 000 1h1.848L4.75 9.557l-.826-1.322a.5.5 0 00-.848.53L3.848 10H1.5a.5.5 0 000 1h2.348l-.772 1.235a.5.5 0 00.848.53l.826-1.322L6.348 14H4.5a.5.5 0 000 1h1.879l-1.311 2.248a.5.5 0 10.863.504l1.333-2.285.811 1.298a.5.5 0 10.848-.53L8.151 15h2.696l-.772 1.235a.5.5 0 00.848.53l.811-1.298 1.333 2.285a.5.5 0 10.863-.504L12.619 15h1.879a.5.5 0 000-1H12.65l1.598-2.557.826 1.322a.5.5 0 10.848-.53L15.15 11h2.348a.5.5 0 000-1zm-6.027 4H7.527l-2.188-3.5L7.527 7h3.946l2.188 3.5-2.188 3.5z" />
            </svg>
        </span>
    );
}

LiniSnow.propTypes = {
    size: PropTypes.number.isRequired,
};
