import React from 'react';
import PropTypes from 'prop-types';

export default function LiniFileAudio({ size, ...props }) {
    let className = 'Component Lini LiniFileAudio';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M17.854 5.646l-4.5-4.5A.5.5 0 0013 1H3.5C2.673 1 2 1.673 2 2.5v16c0 .827.673 1.5 1.5 1.5h13c.827 0 1.5-.673 1.5-1.5V6a.504.504 0 00-.146-.354zM16.793 6H13.5a.5.5 0 01-.5-.5V2.207L16.793 6zM16.5 19h-13a.5.5 0 01-.5-.5v-16a.5.5 0 01.5-.5H12v3.5c0 .827.673 1.5 1.5 1.5H17v11.5a.5.5 0 01-.5.5z" />
                <path d="M8.5 17.001a.493.493 0 01-.312-.11L5.825 15H5.5a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h.325l2.363-1.891A.5.5 0 019 10.5v6a.502.502 0 01-.5.5zM6 14c.114 0 .224.039.312.11L8 15.46v-3.92l-1.688 1.35A.5.5 0 016 13v1zM11.736 16a.5.5 0 01-.372-.833c.411-.459.637-1.05.637-1.667s-.226-1.208-.637-1.667a.5.5 0 11.745-.667c.575.642.891 1.471.891 2.334s-.317 1.691-.892 2.334a.5.5 0 01-.373.167z" />
                <path d="M13.5 17a.5.5 0 01-.399-.8c.589-.783.9-1.717.9-2.7s-.311-1.916-.899-2.7a.5.5 0 01.799-.601c.72.958 1.1 2.099 1.1 3.3s-.38 2.343-1.1 3.301a.498.498 0 01-.4.2zM10.366 14.5a.499.499 0 01-.432-.75.493.493 0 000-.5.5.5 0 01.865-.501 1.495 1.495 0 010 1.502.501.501 0 01-.433.25z" />
            </svg>
        </span>
    );
}

LiniFileAudio.propTypes = {
    size: PropTypes.number.isRequired,
};
