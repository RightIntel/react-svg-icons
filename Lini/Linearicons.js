import React from 'react';
import PropTypes from 'prop-types';

export default function LiniLinearicons({ size, ...props }) {
    let className = 'Component Lini LiniLinearicons';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M19.5 16H19c-.579 0-1 .631-1 1.5a.5.5 0 01-1 0v-1a.5.5 0 00-.854-.353A1.502 1.502 0 0014.086 18H13c-.406 0-1.019-.277-1.288-.58l-1.044-1.181 9.207-10.408a.5.5 0 00.024-.633L16.9 1.2a.5.5 0 00-.4-.2h-13a.5.5 0 00-.4.2L.101 5.198a.5.5 0 00.024.633l9.207 10.408-1.044 1.181c-.289.327-.795.58-1.038.58H7v-.5a1.502 1.502 0 00-2.27-1.287.648.648 0 00-.48-.213c-.308 0-.537.243-.702.455a4.372 4.372 0 00-.442.716L3 17.382V16.5a.5.5 0 00-1 0v1a.5.5 0 01-1 0v-3a.5.5 0 00-1 0v3a1.502 1.502 0 002.27 1.286.65.65 0 00.48.214c.308 0 .537-.243.702-.455.152-.195.309-.449.442-.716L4 17.618v.882a.5.5 0 001 0v-1a.5.5 0 011 0v1a.5.5 0 00.5.5h.75c.556 0 1.324-.395 1.787-.918L10 16.993l.963 1.088c.463.523 1.339.918 2.037.918h2.5c.384 0 .734-.145 1-.383a1.502 1.502 0 002.5-1.117c0-.249.061-.422.103-.5h.397a.5.5 0 000-1zM1.145 5.474L3.75 2h12.5l2.605 3.474L10 15.485 1.145 5.474zM15.5 18a.5.5 0 110-1 .5.5 0 010 1z" />
                <path d="M2.5 15c.132 0 .261-.053.353-.147S3 14.631 3 14.5a.5.5 0 10-.5.5z" />
            </svg>
        </span>
    );
}

LiniLinearicons.propTypes = {
    size: PropTypes.number.isRequired,
};
