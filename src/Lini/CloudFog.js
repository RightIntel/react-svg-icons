import React from 'react';
import PropTypes from 'prop-types';

export default function LiniCloudFog({ size, ...props }) {
    let className = 'Component Lini LiniCloudFog';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M16.006 7.013c-.062 0-.123.001-.184.004A3.004 3.004 0 0013 3a3.014 3.014 0 00-2.74 1.775A6.006 6.006 0 006 3C2.692 3 0 5.692 0 9v4c0 3.308 2.692 6 6 6h10.006A3.999 3.999 0 0020 15.006v-4a3.999 3.999 0 00-3.994-3.994zM6 4a5.008 5.008 0 014.094 2.128.499.499 0 00.908-.257c.023-.379.158-.745.388-1.057A2.002 2.002 0 0115.001 6c0 .513-.197 1.003-.554 1.379a.5.5 0 00.534.814 2.997 2.997 0 014.02 2.814 2.997 2.997 0 01-2.994 2.994H6.001c-2.757 0-5-2.243-5-5s2.243-5 5-5zm12.907 9.749A2.999 2.999 0 0116.006 16H6a5.009 5.009 0 01-4.687-3.259A5.99 5.99 0 006 15h10.006a3.985 3.985 0 002.901-1.251zM16.006 18H6a5.009 5.009 0 01-4.687-3.259A5.99 5.99 0 006 17h10.006a3.985 3.985 0 002.901-1.251A2.999 2.999 0 0116.006 18z" />
            </svg>
        </span>
    );
}

LiniCloudFog.propTypes = {
    size: PropTypes.number.isRequired,
};
