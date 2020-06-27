import React from 'react';
import PropTypes from 'prop-types';

export default function LiniTennis2({ size, ...props }) {
    let className = 'Component Lini LiniTennis2';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M16.218 3.782C14.424 1.988 12.038 1 9.5 1s-4.923.988-6.717 2.782S.001 7.962.001 10.499c0 2.538.988 4.923 2.782 6.717s4.18 2.782 6.717 2.782 4.923-.988 6.718-2.782C18.012 15.422 19 13.036 19 10.499s-.988-4.923-2.782-6.717zM14 10.5a8.46 8.46 0 011.997-5.474C17.246 6.506 18 8.416 18 10.5s-.754 3.994-2.003 5.474A8.452 8.452 0 0114 10.5zM3.003 5.026C4.295 6.557 5 8.48 5 10.5s-.706 3.943-1.997 5.474C1.754 14.494 1 12.584 1 10.5s.754-3.994 2.003-5.474zm.692 11.677C5.185 14.978 6 12.795 6 10.5s-.815-4.478-2.305-6.203C5.215 2.873 7.257 2 9.5 2s4.284.873 5.805 2.297C13.815 6.022 13 8.205 13 10.5s.815 4.478 2.305 6.203C13.785 18.127 11.743 19 9.5 19s-4.284-.873-5.805-2.297z" />
            </svg>
        </span>
    );
}

LiniTennis2.propTypes = {
    size: PropTypes.number.isRequired,
};
