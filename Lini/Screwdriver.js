import React from 'react';
import PropTypes from 'prop-types';

export default function LiniScrewdriver({ size, ...props }) {
    let className = 'Component Lini LiniScrewdriver';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.646 15.439l-4.586-4.586c-.487-.487-1.265-.854-1.811-.854a.474.474 0 01-.25-.061v-.439a.5.5 0 00-.854-.353l-.646.646-6.793-6.793.146-.146a.5.5 0 000-.707l-2-2a.5.5 0 00-.707 0l-1 1a.5.5 0 000 .707l2 2a.498.498 0 00.708 0l.146-.146L9.792 10.5l-.646.646a.5.5 0 00.353.854h.439a.483.483 0 01.061.25c0 .546.367 1.324.854 1.811l4.586 4.586a1.498 1.498 0 002.122 0l1.086-1.086a1.501 1.501 0 000-2.121zM1.207 1.5l.293-.293L2.793 2.5l-.293.293L1.207 1.5zM11 12.25c0-.458-.188-.851-.474-1.069l.655-.655c.217.287.611.474 1.069.474.251 0 .788.245 1.104.561l2.939 2.939-1.793 1.793-2.939-2.939c-.316-.316-.561-.852-.561-1.104zm6.939 4.604l-1.086 1.086a.5.5 0 01-.707 0l-.939-.939L17 15.208l.939.939a.5.5 0 010 .707z" />
            </svg>
        </span>
    );
}

LiniScrewdriver.propTypes = {
    size: PropTypes.number.isRequired,
};
