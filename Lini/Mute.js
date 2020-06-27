import React from 'react';
import PropTypes from 'prop-types';

export default function LiniMute({ size, ...props }) {
    let className = 'Component Lini LiniMute';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M10.834 5.128a.5.5 0 00-.706.037L9 6.419V4.25c0-.72-.427-1.043-.85-1.043-.247 0-.494.104-.736.309L3.316 6.999H1.5c-.827 0-1.5.673-1.5 1.5v4c0 .827.673 1.5 1.5 1.5h.677l-1.049 1.166a.5.5 0 10.743.668l1.562-1.735 3.981 3.384c.241.205.489.309.736.309a.796.796 0 00.67-.362c.119-.179.18-.408.18-.68V7.913l1.872-2.08a.5.5 0 00-.037-.706zM8 4.331V7.53l-4 4.444V7.73l4-3.4zM1 12.5v-4a.5.5 0 01.5-.5H3v5H1.5a.5.5 0 01-.5-.5zm7 4.169l-3.898-3.313L8 9.025v7.644z" />
            </svg>
        </span>
    );
}

LiniMute.propTypes = {
    size: PropTypes.number.isRequired,
};
