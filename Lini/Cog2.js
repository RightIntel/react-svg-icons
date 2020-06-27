import React from 'react';
import PropTypes from 'prop-types';

export default function LiniCog2({ size, ...props }) {
    let className = 'Component Lini LiniCog2';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M13.324 19.402a.501.501 0 01-.475-.343c-.407-1.231-1.552-2.058-2.849-2.058s-2.443.827-2.849 2.058a.501.501 0 01-.65.312 9.971 9.971 0 01-2.865-1.656.499.499 0 01-.055-.718 2.995 2.995 0 00.357-3.496 3.011 3.011 0 00-3.206-1.438.498.498 0 01-.595-.407 10.086 10.086 0 010-3.308.498.498 0 01.595-.407 3.011 3.011 0 003.206-1.438 2.997 2.997 0 00-.357-3.496.498.498 0 01.055-.718A9.961 9.961 0 016.501.633a.505.505 0 01.65.312C7.558 2.176 8.703 3.003 10 3.003s2.443-.827 2.849-2.058a.501.501 0 01.65-.312 9.971 9.971 0 012.865 1.656.499.499 0 01.055.718 2.995 2.995 0 00-.357 3.496 3.01 3.01 0 003.206 1.438.498.498 0 01.595.407 10.086 10.086 0 010 3.308c-.022.134-.098.253-.211.33s-.251.105-.384.077a3.011 3.011 0 00-3.206 1.438 2.997 2.997 0 00.357 3.496.498.498 0 01-.055.718 9.948 9.948 0 01-2.865 1.656.506.506 0 01-.175.032zm-8.67-2.161a8.97 8.97 0 001.747 1.01C7.063 16.886 8.45 16 10 16s2.937.886 3.599 2.251a8.97 8.97 0 001.747-1.01 3.994 3.994 0 01-.15-4.241 4.013 4.013 0 013.747-1.99 8.994 8.994 0 000-2.018 4.013 4.013 0 01-3.747-1.99 3.99 3.99 0 01.15-4.241 8.97 8.97 0 00-1.747-1.01C12.937 3.116 11.55 4.002 10 4.002s-2.937-.886-3.599-2.251a8.97 8.97 0 00-1.747 1.01 3.994 3.994 0 01.15 4.241 4.013 4.013 0 01-3.747 1.99 8.994 8.994 0 000 2.018A4.015 4.015 0 014.804 13a3.99 3.99 0 01-.15 4.241z" />
                <path d="M10 13c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
            </svg>
        </span>
    );
}

LiniCog2.propTypes = {
    size: PropTypes.number.isRequired,
};