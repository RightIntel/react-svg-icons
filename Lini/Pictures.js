import React from 'react';
import PropTypes from 'prop-types';

export default function LiniPictures({ size, ...props }) {
    let className = 'Component Lini LiniPictures';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M16.5 20h-14c-.827 0-1.5-.673-1.5-1.5v-13C1 4.673 1.673 4 2.5 4h14c.827 0 1.5.673 1.5 1.5v13c0 .827-.673 1.5-1.5 1.5zM2.5 5a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h14a.5.5 0 00.5-.5v-13a.5.5 0 00-.5-.5h-14zM16.5 3h-14a.5.5 0 010-1h14a.5.5 0 010 1zM15.5 1h-12a.5.5 0 010-1h12a.5.5 0 010 1z" />
                <path d="M11.5 13c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1z" />
                <path d="M14.5 8h-10a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5zM5 13.675l1.266-1.582c.073-.091.164-.142.259-.144s.189.044.266.131L9.387 15H5v-1.325zM14 15h-3.275l-3.187-3.585c-.272-.306-.651-.476-1.039-.466s-.758.199-1.014.519L5 12.074V8.999h9v6z" />
            </svg>
        </span>
    );
}

LiniPictures.propTypes = {
    size: PropTypes.number.isRequired,
};
