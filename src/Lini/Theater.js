import React from 'react';
import PropTypes from 'prop-types';

export default function LiniTheater({ size, ...props }) {
    let className = 'Component Lini LiniTheater';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M11.5 8a.5.5 0 01-.431-.246C11.06 7.74 10.6 7 10 7c-.602 0-1.064.744-1.068.752a.5.5 0 11-.864-.504C8.098 7.197 8.81 6 10 6s1.902 1.197 1.932 1.248a.5.5 0 01-.431.752zM16.5 8a.5.5 0 01-.432-.248C16.065 7.746 15.603 7 15 7s-1.064.744-1.068.752a.5.5 0 11-.864-.504C13.098 7.197 13.81 6 15 6s1.902 1.197 1.932 1.248a.5.5 0 01-.431.752zM12.5 14c-2.283 0-3.401-2.183-3.447-2.276a.5.5 0 01.447-.723h6a.5.5 0 01.447.723C15.901 11.817 14.783 14 12.5 14zm-2.032-2c.426.472 1.11 1 2.032 1s1.606-.528 2.032-1h-4.065z" />
                <path d="M19.792 2.095a.499.499 0 00-.45-.069c-.029.01-2.978.974-6.842.974s-6.784-.964-6.813-.974a.5.5 0 00-.66.473c0 .06 0 1.002.119 2.386-2.638-.256-4.441-.853-4.46-.859a.5.5 0 00-.659.473c0 .093.001 2.312.445 5.01.262 1.592.626 3.018 1.081 4.238.58 1.554 1.313 2.782 2.18 3.65C4.794 18.461 6.062 19 7.5 19c1.636 0 3.043-.693 4.187-2.06.264.04.535.06.813.06 1.763 0 3.259-.803 4.447-2.387.911-1.215 1.639-2.894 2.163-4.991.88-3.519.89-6.976.89-7.121a.497.497 0 00-.208-.405zM7.5 18c-1.179 0-2.179-.428-3.059-1.308-2.836-2.84-3.316-9.403-3.398-11.52.813.218 2.307.558 4.204.727.058.506.131 1.048.224 1.61.067.405.14.799.22 1.181-.185.165-.424.309-.692.309-.603 0-1.065-.746-1.068-.752a.5.5 0 00-.864.504c.03.051.742 1.248 1.932 1.248.356 0 .669-.106.934-.257.182.717.389 1.387.619 2.003.189.507.395.98.617 1.417-1.301.509-2.079 2.037-2.117 2.113a.5.5 0 00.447.723h3.932c.37.272.761.489 1.172.65-.885.907-1.906 1.35-3.104 1.35zm.867-3H6.424c.306-.387.74-.811 1.245-.952.22.348.453.665.697.952zm9.769-5.606c-.492 1.963-1.163 3.519-1.993 4.624C15.141 15.352 13.949 16 12.5 16c-.97 0-1.818-.29-2.578-.882l-.016-.012a5.21 5.21 0 01-.465-.414 7.094 7.094 0 01-1.076-1.421l-.022-.039c-1.869-3.205-2.23-8.251-2.299-10.06 1.113.299 3.499.827 6.456.827 2.962 0 5.364-.53 6.483-.829-.047 1.174-.218 3.714-.847 6.223z" />
            </svg>
        </span>
    );
}

LiniTheater.propTypes = {
    size: PropTypes.number.isRequired,
};