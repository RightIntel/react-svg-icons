import React from 'react';
import PropTypes from 'prop-types';

export default function LiniLamp({ size, ...props }) {
    let className = 'Component Lini LiniLamp';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M10.5 20h-1a.5.5 0 010-1h1a.5.5 0 010 1zM10 0C6.692 0 4 2.692 4 6c0 2.114 1.014 3.828 1.057 3.9.266.444.645 1.228.826 1.712l.798 2.127c.121.322.353.613.641.834a1.493 1.493 0 00.061 1.927A1.502 1.502 0 008.5 19h3a1.502 1.502 0 001.117-2.5 1.494 1.494 0 00.061-1.927c.288-.221.52-.511.641-.834l.797-2.127c.182-.484.56-1.268.826-1.712C14.985 9.828 16 8.114 16 6c0-3.308-2.692-6-6-6zm1.5 18h-3a.5.5 0 010-1h3a.5.5 0 010 1zm.5-2.5a.5.5 0 01-.5.5h-3a.5.5 0 010-1h3a.5.5 0 01.5.5zm2.085-6.115a13.72 13.72 0 00-.905 1.876l-.797 2.127c-.12.32-.541.612-.883.612h-3c-.342 0-.763-.292-.883-.612l-.798-2.127a13.777 13.777 0 00-.905-1.876C5.905 9.37 5 7.84 5 6c0-2.757 2.243-5 5-5s5 2.243 5 5c0 1.829-.906 3.371-.915 3.385z" />
            </svg>
        </span>
    );
}

LiniLamp.propTypes = {
    size: PropTypes.number.isRequired,
};
