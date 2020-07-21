import React from 'react';
import PropTypes from 'prop-types';

export default function LiniBubbleHeart({ size, ...props }) {
    let className = 'Component Lini LiniBubbleHeart';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M.5 19a.5.5 0 01-.257-.929 6.211 6.211 0 002.641-3.179C1.046 13.485 0 11.538 0 9.5c0-1.029.258-2.026.768-2.964.486-.894 1.18-1.695 2.061-2.381C4.616 2.765 6.985 1.999 9.5 1.999s4.884.766 6.671 2.156c.881.685 1.575 1.486 2.061 2.381.51.937.768 1.934.768 2.964s-.258 2.026-.768 2.964c-.486.894-1.18 1.695-2.061 2.381-1.787 1.39-4.156 2.156-6.671 2.156-1.033 0-2.047-.129-3.016-.385a20.74 20.74 0 01-2.189 1.27c-1.488.74-2.764 1.115-3.794 1.115zm9-16C4.813 3 1 5.916 1 9.5c0 1.815 1.005 3.562 2.756 4.792.172.121.25.336.196.539-.117.436-.515 1.633-1.58 2.788 1.302-.456 2.704-1.247 3.739-1.959a.499.499 0 01.421-.069C7.48 15.862 8.479 16 9.5 16c4.687 0 8.5-2.916 8.5-6.5S14.187 3 9.5 3z" />
                <path d="M9.5 13a.502.502 0 01-.224-.053 15.108 15.108 0 01-2.07-1.297c-1.455-1.095-2.192-2.155-2.192-3.149 0-.735.294-1.391.827-1.846.494-.422 1.172-.654 1.909-.654.598 0 1.215.275 1.75.769.535-.494 1.152-.769 1.75-.769.737 0 1.415.232 1.909.654.534.456.827 1.111.827 1.846 0 .995-.738 2.055-2.192 3.149a15.132 15.132 0 01-2.069 1.297.505.505 0 01-.224.053zM7.75 7c-.864 0-1.736.464-1.736 1.5 0 .643.633 1.475 1.783 2.342.675.51 1.361.904 1.703 1.092a14.32 14.32 0 001.703-1.092c1.15-.867 1.783-1.699 1.783-2.342 0-1.036-.872-1.5-1.736-1.5-.44 0-.949.304-1.361.814a.502.502 0 01-.778 0C8.699 7.304 8.19 7 7.75 7z" />
            </svg>
        </span>
    );
}

LiniBubbleHeart.propTypes = {
    size: PropTypes.number.isRequired,
};