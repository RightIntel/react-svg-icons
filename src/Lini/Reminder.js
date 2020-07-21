import React from 'react';
import PropTypes from 'prop-types';

export default function LiniReminder({ size, ...props }) {
    let className = 'Component Lini LiniReminder';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M9.415 2a.499.499 0 01-.471-.333 1.002 1.002 0 00-1.886 0 .5.5 0 01-.943-.333C6.397.537 7.155.001 8.001.001s1.604.536 1.886 1.333a.5.5 0 01-.472.667zM17 9a1.99 1.99 0 00-1.113.339A2.003 2.003 0 0014 8a1.99 1.99 0 00-1.113.339A2.003 2.003 0 0011 7c-.364 0-.706.098-1 .269V5.5a.5.5 0 00-1 0v5a.5.5 0 001 0V9c0-.551.449-1 1-1s1 .449 1 1v1.5a.5.5 0 001 0V10c0-.551.449-1 1-1s1 .449 1 1v1.5a.5.5 0 001 0V11c0-.551.449-1 1-1s1 .449 1 1c0 2.783-.436 4.879-1.297 6.232C15.956 18.405 14.879 19 13.5 19H8.51c-.039-.003-.46-.05-1.095-.525-.633-.474-1.605-1.472-2.638-3.54-2.027-4.054-2.65-5.331-2.656-5.343l-.002-.004c-.251-.503-.073-1.162.389-1.439a.876.876 0 01.685-.095.956.956 0 01.587.472l.006.01 1.561 2.705c.319.583.678.828 1.067.729.39-.099.587-.489.587-1.157V5.5a.5.5 0 00-1 0v4.873L4.655 8.04a1.947 1.947 0 00-1.199-.953 1.866 1.866 0 00-1.462.202c-.907.544-1.253 1.774-.77 2.742.03.061.668 1.368 2.66 5.35.938 1.875 1.967 3.216 3.059 3.984.857.603 1.449.634 1.559.634h5c.845 0 1.613-.183 2.284-.544.696-.375 1.289-.942 1.763-1.687.964-1.515 1.453-3.792 1.453-6.768 0-1.103-.897-2-2-2z" />
                <path d="M12.5 1c-.2 0-.81 0-2.89 1.054-.677.343-1.283.682-1.61.869a37.583 37.583 0 00-1.61-.869C4.31 1 3.7 1 3.5 1 2.122 1 1 2.122 1 3.5S2.122 6 3.5 6c.2 0 .81 0 2.89-1.054A37.583 37.583 0 008 4.077c.327.187.933.526 1.61.869C11.69 6 12.3 6 12.5 6 13.878 6 15 4.878 15 3.5S13.878 1 12.5 1zM5.934 4.056C4.252 4.908 3.672 5 3.5 5 2.673 5 2 4.327 2 3.5S2.673 2 3.5 2c.171 0 .752.092 2.434.944.385.195.75.391 1.051.556-.301.165-.666.361-1.051.556zM12.5 5c-.171 0-.752-.092-2.434-.944-.385-.195-.75-.391-1.051-.556.301-.165.666-.361 1.051-.556C11.748 2.092 12.328 2 12.5 2c.827 0 1.5.673 1.5 1.5S13.327 5 12.5 5z" />
            </svg>
        </span>
    );
}

LiniReminder.propTypes = {
    size: PropTypes.number.isRequired,
};